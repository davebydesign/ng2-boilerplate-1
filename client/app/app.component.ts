import { Component } from '@angular/core';
//import * as io from "socket.io-client";

import { SocketioService } from './shared/socketio/socketio.module';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {
  title = 'app works!!!!';






  //ngOnInit() {
  constructor(private socketio:SocketioService) {
      console.log(socketio.socket); 
      

      socketio.socket.on('news', (data) => {
        console.log(data);   
      });


      socketio.socket.emit('foobar', {foo:'bar'});


  }



  ngOnDestroy() {


  }

}
