using System.Collections.Generic;

namespace Backend.Interfaces
{
    public interface IHomePageExperiments
    {
        public Dictionary<string, bool> GetExperiments();
    }
}