import { Component } from '@angular/core';
import { map } from 'rxjs/operators';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
import { NutritionService } from '../../services/nutrition.service';
import { Chart } from 'chart.js';
@Component({
    selector: 'app-dashboard',
    templateUrl: './main.component.html',
    styleUrls: ['./main.component.css']
})
export class MainComponent {
    /** Based on the screen size, switch from standard to one column per row */

    constructor(private readonly nutrition: NutritionService) {}

    date_list: string[] = [];
    data_points: number[] = [];
    public chart: Chart;
    public chart2: Chart;
    async ngOnInit(): Promise<void> {

        await this.nutrition
            .fetchCalories()
            .toPromise()
            .then((res) => {
                if (res.status) {
                    this.date_list = res.data.date_list;
                    this.data_points = res.data.data_points;
                    this.data_points.forEach(d=>{
                        this.avg_dataset.push(2250)
                    })
                    this.createChart();
                }
            });
        this.createBar()

    }

    avg_dataset: number[] = [];

    createChart() {
        this.chart = new Chart('MyChart', {
            type: 'line', //this denotes tha type of chart
            data: {
                // values on X-Axis
                labels: this.date_list,
                datasets: [
                    {
                        label: 'Calories',
                        data: this.data_points,
                        borderColor: 'blue'
                    },
                    {
                        label: 'Avg. Calories',
                        data: this.avg_dataset,
                        borderColor: 'black'
                    }
                ]
            }
        });
    }
    limit = 10000;

    createBar() {
        const calorie_intake = parseInt(localStorage.getItem('calorie_count') || '0');
        console.log(sessionStorage.getItem('calorie_count'))
        this.chart2 = new Chart('MyBar', {
            type: 'doughnut', //this denotes tha type of chart
            data: {
                // values on X-Axis
                labels: ['Pink', 'White'],
                datasets: [
                    {
                        label: 'Daily Calorie Intake',
                        data: [calorie_intake, this.limit - calorie_intake],
                        backgroundColor:[
                            'rgb(255, 99, 132)', 'rgb(256, 256, 256)'
                        ],
                        borderColor: 'black'
                        
                    }
                ]
            }
        });
    }
}
