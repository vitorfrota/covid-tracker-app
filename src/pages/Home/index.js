import React, { useState, useEffect } from 'react';
import { format, parseISO } from 'date-fns';
import { MdChevronLeft, MdChevronRight } from 'react-icons/md';
import pt from 'date-fns/locale/pt';
import axios from 'axios';


import Card from '../../components/Card';
import MainCard from '../../components/MainCard';

import { Container, Select } from './styles';


const options = [ 
    { label: 'Brasil', query: 'br'},
    { label: 'China', query: 'cn'},
    { label: 'Espanha', query: 'es'},
    { label: 'Estados Unidos', query: 'us'},
    { label: 'Itália', query: 'it'},
];

export default function Home() {
    const [covid, setCovid] = useState({});
    const [option, setOption] = useState(0);
    const [info, setInfo] = useState({});


    const dateFormatted = (date) => {
        let textDate = format(parseISO(date), "dd 'de' MMMM 'de' yyyy '-' HH:mm", {
            locale: pt
        });
        return textDate;
    };

    function getPercentCases(total, cases){
        const percent = ((cases*100)/total).toFixed(0);
        return percent;
    }

    useEffect(()=> {
        async function getCovidCases(){
            const { data } = await axios.get(`https://covid19.mathdro.id/api/countries/${options[option].query}`);

            setInfo({ date: dateFormatted(data.lastUpdate) });

            let activeCases = data.confirmed.value - data.recovered.value - data.deaths.value;

            setCovid(
            { 
                infectados: 
                {
                    title: 'infectados', 
                    amount: data.confirmed.value, 
                },
                ativos: 
                    {
                        title: 'ativos', 
                        amount: activeCases, 
                        percent: getPercentCases(data.confirmed.value, activeCases),
                        color: '#00b8da',
                    },
                recuperados: 
                    {
                        title: 'recuperados', 
                        amount: data.recovered.value, 
                        percent: getPercentCases(data.confirmed.value, data.recovered.value),
                        color: '#37b37f',
                    },
                mortos: 
                    {
                        title: 'fatalidades', 
                        amount: data.deaths.value, 
                        percent: getPercentCases(data.confirmed.value, data.deaths.value),
                        color: '#ff562f',
                    }    
            }
        );
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

  return (
    <Container>
        <header>
            <h1>Covid Tracker</h1>
            <p>Última atualização: <strong>{info.date}</strong></p>
        </header>
        <Select>
            <button onClick={handlePrevCountry}>
                <MdChevronLeft size={42} color="#fff" />
            </button>
            <p>{options[option].label}</p>
            <button onClick={handleNextCountry}>
                <MdChevronRight size={42} color="#fff" />
            </button>
        </Select>
        <MainCard data={covid.infectados || {}} flag={options[option].query}/>
        <div className="list-cards">
            <Card data={covid.ativos || {}} showChart/>
            <Card data={covid.recuperados || {}} showChart/>
            <Card data={covid.mortos || {}} showChart/>
        </div>
    </Container>
  );
}
