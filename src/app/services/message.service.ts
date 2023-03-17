import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class MessageService {
  private messages: string[] = [];

  add(message: string): void {
    console.log(message)
  }

  clear(): void {
    this.messages = [];
  }
  getMessages(): string[] {
    return this.messages;
  }
}
