using System.Collections.Generic;

namespace Backend.Models
{
    public class HomePageResponse
    {
        public string Title { get; set; }
        public Dictionary<string, bool> Experiments { get; set; }
    }
}
