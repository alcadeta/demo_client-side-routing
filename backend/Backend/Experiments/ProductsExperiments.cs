using System.Collections.Generic;
using Backend.Interfaces;
using Newtonsoft.Json;

namespace Backend.Experiments
{
    public class ProductsExperiments : IProductsExperiments
    {
        private const string HIDE_REMAINING = "hideRemaining";

        private readonly Dictionary<string, bool> _experiments;

        public ProductsExperiments() => _experiments = new()
        {
            { HIDE_REMAINING, true }
        };

        public Dictionary<string, bool> GetExperiments() => _experiments;
    }

}