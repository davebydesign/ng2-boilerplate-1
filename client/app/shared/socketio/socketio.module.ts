import {NgModule} from "@angular/core";
import {SocketioService} from "./socketio.service";

@NgModule({})
export class SocketioModule {
    static forRoot() {
        return {
            ngModule: SocketioModule,
            providers: [SocketioService]
        }
    }
};

export {
    SocketioService
}