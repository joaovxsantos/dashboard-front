import React from "react";
import ReactApexChart from "react-apexcharts";


export function ApexChart() {
    const [state] = React.useState({

        series: [{
            name: 'Vendas',
            data: [1, 2, 3, 4, 5, 6, 7, 2.3, 1, 5, 2, 3]
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

            }
        },


    })

    return (
        <div>
            <div id="chart">
                <ReactApexChart options={state.options} series={state.series} type="bar" height={400} />
            </div>
            <div id="html-dist">

            </div>
        </div>
    );
}