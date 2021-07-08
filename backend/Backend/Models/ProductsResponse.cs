using System;
using System.Collections.Generic;

namespace Backend.Models
{
    public class Product
    {
        public string Name { get; set; }
        public decimal Price { get; set; }
        public int Remaining { get; set; }
        public DateTime BestBefore { get; set; }
    }

    public class ProductsResponse
    {
         public string Title { get; set; }
         public Dictionary<string, bool> Experiments { get; set; }
         public IEnumerable<Product> Products { get; set; }
    }
}