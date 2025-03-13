import React from "react";
import ReactApexChart from "react-apexcharts";


export function ApexChart() {
    const [state, setState] = React.useState({

        series: [{
            name: 'Inflation',
            data: [2.3, 3.1, 4.0, 10.1, 4.0, 3.6, 3.2, 2.3, 1.4, 0.8, 0.5, 0.2]
        }],
        options: {
            chart: {
                height: 350,
                type: 'bar' as const,
            },
            plotOptions: {
                bar: {
                    borderRadius: 10,
                    dataLabels: {
                        position: 'top', // top, center, bottom
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
                position: 'top',
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
            }
        },


    })

    return (
        <div>
            <div id="chart">
                <ReactApexChart options={state.options} series={state.series} type="bar" width={600} height={350} />
            </div>
            <div id="html-dist">

            </div>
        </div>
    );
}