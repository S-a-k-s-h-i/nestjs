import { Logger } from '@nestjs/common';
import { OnGatewayConnection, OnGatewayDisconnect, OnGatewayInit, SubscribeMessage, WebSocketGateway } from '@nestjs/websockets';
import { Socket } from 'socket.io';

@WebSocketGateway()
export class ChatGateway implements OnGatewayInit,OnGatewayConnection,OnGatewayDisconnect{
  private logger:Logger = new Logger('ChatGateway');

  afterInit(server:any){
    this.logger.log('Initialized');
  }

  handleConnection(client:Socket,...args:any[]){
    this.logger.log(`Client Connected: ${client.id}`);
  }

  handleDisconnect(client:Socket){
    this.logger.log(`Client Disconnected: ${client.id}`);
  }

  @SubscribeMessage('msgToServer')
  handleMessage(client:Socket, payload: any){
    client.broadcast.emit('msgToClient',payload);
  }
}
