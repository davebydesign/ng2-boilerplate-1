import {Injectable} from '@angular/core';
import * as io from "socket.io-client";

@Injectable()
export class SocketioService {

  private url = 'http://localhost:8000';
  public socket;


    constructor() {
        this.socket = io(this.url);
    }

    /*
    on(msgname, func) {
        this.socket.on(msgname, func);
    }

    emit(msgname, data) {
        this.socket.emit(msgname, data);
    }
    */

}
