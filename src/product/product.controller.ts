import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { ProductService } from './product.service';

@Controller('product')
export class ProductController {
    constructor(private productService: ProductService) {}

    // 상품 전체 조회 
    @Get()
    getAllProducts() {
        return this.productService.getAllProducts();
    }

    // 상품 상세 조회
    @Get('/:id')
    getProductDetail(@Param('id') id: number) {
        return this.productService.getProductDetail(id);
    }

}
