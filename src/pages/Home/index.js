import React, { useState, useEffect } from 'react';
import { format, parseISO } from 'date-fns';
import { MdChevronLeft, MdChevronRight } from 'react-icons/md';
import pt from 'date-fns/locale/pt';
import axios from 'axios';

import Card from '../../components/Card';
import Error from '../../components/Error';
import Loading from '../../components/Loading';
import MainCard from '../../components/MainCard';

import { Container, Select } from './styles';


const options = [ 
    { label: 'Brasil', query: 'br'},
    { label: 'China', query: 'cn'},
    { label: 'Espanha', query: 'es'},
    { label: 'Estados Unidos', query: 'us'},
    { label: 'França', query: 'fr'},
    { label: 'Itália', query: 'it'},
];

export default function Home() {
    const [covid, setCovid] = useState({});
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(true);
    const [option, setOption] = useState(0);


    const dateFormatted = (date) => {
        let textDate = format(parseISO(date), "dd 'de' MMMM 'de' yyyy '-' HH:mm", {
            locale: pt
        });
        return textDate;
    };

    const amountFormatted = (amount) => {
        return new Intl.NumberFormat('pt-BR').format(amount)
    }

    function getPercentCases(total, cases){
        const percent = ((cases*100)/total).toFixed(0);
        return percent;
    }

    useEffect(()=> {
        async function getCovidCases(){
            setLoading(true);
            try{
                const { data } = await axios.get(`https://covid19.mathdro.id/api/countries/${options[option].query}`);

                let activeCases = data.confirmed.value - data.recovered.value - data.deaths.value;
    
                setCovid(
                { 
                    infectados: 
                    {
                        title: 'total infectados', 
                        amount: amountFormatted(data.confirmed.value), 
                        flag: options[option].query,
                        updateDate: dateFormatted(data.lastUpdate)
                    },
                    ativos: 
                        {
                            title: 'ativos', 
                            amount: amountFormatted(activeCases), 
                            percent: getPercentCases(data.confirmed.value, activeCases),
                            color: '#00b8da',
                        },
                    recuperados: 
                        {
                            title: 'recuperados', 
                            amount: amountFormatted(data.recovered.value), 
                            percent: getPercentCases(data.confirmed.value, data.recovered.value),
                            color: '#37b37f',
                        },
                    mortos: 
                        {
                            title: 'fatalidades', 
                            amount: amountFormatted(data.deaths.value), 
                            percent: getPercentCases(data.confirmed.value, data.deaths.value),
                            color: '#ff562f',
                        }    
                });
                setLoading(false);
                setError(false);
            }catch(e){
                setError(true);
                setLoading(false);
            }
        }
        getCovidCases();
    }, [option]);

    function handlePrevCountry(){
        if(option > 0){
            setOption(option-1);
        }else{
            setOption(options.length-1);
        }
    }

    function handleNextCountry(){
        if(option < options.length-1){
            setOption(option+1);
        }else{
            setOption(0);
        }
    }


    const content = {
        home: (
            <>
            <Select>
                <button onClick={handlePrevCountry}>
                    <MdChevronLeft size={42} color="#ccc" />
                </button>
                <p>{options[option].label}</p>
                <button onClick={handleNextCountry}>
                    <MdChevronRight size={42} color="#ccc" />
                </button>
            </Select>   
            <MainCard data={covid.infectados || {}} flag={options[option].query}/>
            <div className="list-cards">
                <Card data={covid.ativos || {}}/>
                <Card data={covid.recuperados || {}}/>
                <Card data={covid.mortos || {}}/>
            </div>
            </>
        ),
        error: (
            <Error />
        )
    }

  return (
    <Container>
        <header>
 
        </header>
        {loading ? (
            <Loading />
        ) : error ? content['error'] : content['home']}
    </Container>
  );
}
