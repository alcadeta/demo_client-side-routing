using System;
using System.Collections.Generic;
using Backend.Interfaces;
using Backend.Models;
using Microsoft.AspNetCore.Mvc;

namespace Backend.Controllers
{
    [ApiController]
    [Route("/products")]
    public class ProductsController : ControllerBase
    {
        private readonly Dictionary<string, bool> _experiments;

        public ProductsController(IProductsExperiments productsExperiments) =>
            _experiments = productsExperiments.GetExperiments();

        [HttpGet]
        public ProductsResponse Get() => new()
        {
            Title = "Products",
            Products = new Product[]
            {
                new() { Name = "Cucumber", Price = 0.30M, Remaining = 42, BestBefore = DateTime.Today.AddDays(6)},
                new() { Name = "Tomato", Price = 0.35M, Remaining = 24, BestBefore = DateTime.Today.AddDays(3)},
                new() { Name = "Watermelon", Price = 0.50M, Remaining = 7, BestBefore = DateTime.Today.AddDays(4)}
            },
            Experiments = _experiments
        };
    }
}