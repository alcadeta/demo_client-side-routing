using System.Collections.Generic;
using Backend.Interfaces;
using Newtonsoft.Json;

namespace Backend.Experiments
{
    public class HomePageExperiments : IHomePageExperiments
    {
        private const string BLUE_HEADER_EXPERIMENT = "blueHeader";
        private const string RED_BUTTON_EXPERIMENT = "redButton";

        private readonly Dictionary<string, bool> _experiments;

        public HomePageExperiments() => _experiments = new()
        {
            { BLUE_HEADER_EXPERIMENT, true },
            { RED_BUTTON_EXPERIMENT, true }
        };

        public Dictionary<string, bool> GetExperiments() => _experiments;
    }

}