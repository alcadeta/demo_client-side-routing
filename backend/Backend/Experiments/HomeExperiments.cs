using System.Collections.Generic;
using Backend.Interfaces;
using Newtonsoft.Json;

namespace Backend.Experiments
{
    public class HomeExperiments : IHomeExperiments
    {
        private const string BLUE_HEADER = "blueHeader";
        private const string RED_BUTTON = "redButton";

        // TODO: Use IEnumerable<Experiment>. Experiment should have a single
        // field of bool named Enabled
        private readonly Dictionary<string, bool> _experiments;

        public HomeExperiments() => _experiments = new()
        {
            { BLUE_HEADER, true },
            { RED_BUTTON, true }
        };

        public Dictionary<string, bool> GetExperiments() => _experiments;
    }

}