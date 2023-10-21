import React, { useState, useEffect } from "react";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { ProductService } from "./service/ProductService";

interface Product {
  id: string;
  code: string;
  name: string;
  description: string;
  image: string;
  price: number;
  category: string;
  quantity: number;
  inventoryStatus: string;
  rating: number;
}

export default function BasicDemo() {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    ProductService.getProductsSmall().then((data) => setProducts(data));
  }, []);

  return (
    <div className="card" style={{width: "800px"}}>
      <DataTable
        value={products}
        scrollable
        scrollHeight="400px"
        className="mt-4"
        removableSort
        tableStyle={{ minWidth: "50rem" }}
        columnResizeMode="expand"
        resizableColumns
        // showGridlines
        reorderableColumns
        sortMode="single"
      >
        <Column field="code" header="Code" style={{width: "50px", maxWidth: "50px"}}></Column>
        <Column field="name" header="Name" sortable style={{width: "50px"}}></Column>
        <Column field="category" header="Category" sortable style={{width: "50px"}}></Column>
        <Column field="quantity" header="Quantity" sortable ></Column>
        <Column field="category" header="Category" sortable style={{width: "50px"}}></Column>
        <Column field="quantity" header="Quantity" sortable ></Column>
        <Column field="category" header="Category" sortable style={{width: "50px"}}></Column>
        <Column field="quantity" header="Quantity" sortable ></Column>
        <Column field="category" header="Category" sortable style={{width: "50px"}}></Column>
        <Column field="quantity" header="Quantity" sortable ></Column>
      </DataTable>
    </div>
  );
}
