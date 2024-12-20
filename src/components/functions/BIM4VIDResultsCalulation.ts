//calculation of eu or bim4vid answers
import { type Ref } from "vue";

export function BIM4VIDcalculation(
    answers: Ref<any>,
    trafficLightKPI: Ref<Array<string>>
) {
    if (answers.value) {
        console.log(answers.value)
            const responses: any = answers.value;
            for (let i = 2; i < 20; i++) {
                const response = responses[`BIM4VIDQuestion${i}`];
                let color = 'green';
                if (responses.BIM4VIDQuestion1 === 'Item 1') {
                    if (response > 3) {
                        color = 'green';
                    } else if (response === 3) {
                        color = 'yellow';
                    } else {
                        color = 'red';
                    }
                } else if (responses.BIM4VIDQuestion1 === 'Item 2') {
                    if (response > 2) {
                        color = 'green';
                    } else if (response === 2) {
                        color = 'yellow';
                    } else {
                        color = 'red';
                    }
                } else if (responses.BIM4VIDQuestion1 === 'Item 3') {
                    if (response > 1) {
                        color = 'green';
                    } else if (response === 1) {
                        color = 'yellow';
                    } else {
                        color = 'red';
                    }
                }
                trafficLightKPI.value.push(color);
            }
        }
        return {
            BIM4VIDcalculation
        };
    }
    



