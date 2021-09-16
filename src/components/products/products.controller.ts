import { ProductsService } from './products.service';
import { Body,Controller, Delete, Get, Param, Patch, Post, Req } from '@nestjs/common';
import { Request } from 'express';

@Controller('products')
export class ProductsController 
{
  constructor(private readonly ___product: ProductsService) {}

  @Post()
	async addProduct(@Body() product : { name: string, image: string, price: string, category: string, reviews: string, status: string })
  {
		return await this.___product.addProduct(product);
	}
}
