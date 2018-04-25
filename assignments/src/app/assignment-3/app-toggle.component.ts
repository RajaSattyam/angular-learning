import { Component } from '@angular/core';

@Component({
    selector:'app-toggle',
    templateUrl:'./app-toggle.component.html',
    styleUrls:['./app-toggle.component.css']
})
export class ButtonToggle {
    mySecret = 'This is secret';
    showSecret = false;
    count = 0;
    log = []
    onToggleDisplay(){
        this.showSecret = !this.showSecret;
        //this.log.push(this.log.length + 1);
        this.log.push(new Date());
        
    }

    getBackground(){
       return this.count>5?'green':'';
    }
}