import { Injectable, NotFoundException } from '@nestjs/common';

export interface Coffee {
  nome: string;
  tipo: string;
  quantidade?: number;
  preco?: number;
  id: string;
  descricao?: string;
  tags?: string[];
}

@Injectable()
export class AppService {
  private coffees: Coffee[] = [];

  getCoffeeById(id: string): Coffee {
    const coffee = this.coffees.find(c => c.id === id);
    if (!coffee) {
      throw new NotFoundException('Café não encontrado');
    }
    return coffee;
  }

  createCoffee(data: Coffee): Coffee {
    this.coffees.push(data);
    return data;
  }
}
