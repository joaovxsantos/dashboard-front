import React from "react";
import ReactApexChart from "react-apexcharts";


export function ApexChart() {
    const [state] = React.useState({

        series: [{
            name: 'Vendas',
            data: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
        }],
        options: {
            chart: {
                toolbar: {
                    show: false
                },
                height: 350,
                type: 'area' as const,
            },
            plotOptions: {
                bar: {
                    borderRadius: 10,
                    dataLabels: {
                        position: 'top'
                    },
                }
            },
            dataLabels: {
                enabled: true,
                formatter: (val: string) => `${val}%`,
                offsetY: -20,
                style: {
                    fontSize: '12px',
                    colors: ["#304758"]
                }
            },

            xaxis: {
                categories: ["Jan", "Fev", "Mar", "Abr", "Mai", "Jun", "Jul", "Aug", "Set", "Out", "Nov", "Dez"],
                position: 'bottom',
                axisBorder: {
                    show: false
                },
                axisTicks: {
                    show: false
                },
                crosshairs: {
                    fill: {
                        type: 'gradient',
                        gradient: {
                            colorFrom: '#D8E3F0',
                            colorTo: '#BED1E6',
                            stops: [0, 100],
                            opacityFrom: 0.4,
                            opacityTo: 0.5,
                        }
                    }
                },
                tooltip: {
                    enabled: true,
                }
            },
            yaxis: {
                axisBorder: {
                    show: false
                },
                axisTicks: {
                    show: false,
                },
                labels: {
                    show: false,
                    formatter: (val: number) => `${val}%`
                }

            },
            title: {
                text: 'Grafico de vendas do ano de 2025',
                floating: true,
                offsetY: 330,
                align: 'center' as const,
                style: {
                    color: '#444'
                }
            },
        },


    })

    return (
        <div>
            <div id="chart">
                <ReactApexChart options={state.options} series={state.series} type="area" />
            </div>
            <div id="html-dist">

            </div>
        </div>
    );
}