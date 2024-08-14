import { Component } from '@angular/core';
import { chat, chatUser } from './data/chat';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-chat-bot',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './chat-bot.component.html',
  styleUrl: './chat-bot.component.css'
})
export class ChatBotComponent {
public chat= chat.map(cnv=>cnv ?? [])
public chatUser= chatUser.map(cnv=>cnv ?? [])
}
