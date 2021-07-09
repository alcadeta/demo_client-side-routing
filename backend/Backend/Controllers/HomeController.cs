using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Backend.Experiments;
using Backend.Interfaces;
using Backend.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;

namespace Backend.Controllers
{
    [ApiController]
    [Route("/")]
    public class HomeController : ControllerBase
    {
        private readonly Dictionary<string, bool> _experiments;

        public HomeController(IHomeExperiments homeExperiments) =>
            _experiments = homeExperiments.GetExperiments();

        [HttpGet]
        public HomePageResponse Get() => new()
        {
            Title = "Client Side Routing, wooo!",
            Experiments = _experiments
        };
    }
}
