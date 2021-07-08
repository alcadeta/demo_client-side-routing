using System.Collections.Generic;

namespace Backend.Interfaces
{
    public interface IExperiments
    {
        public Dictionary<string, bool> GetExperiments();
    }
}