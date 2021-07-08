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
    public class HomePageController : ControllerBase
    {
        private readonly Dictionary<string, bool> _experiments;

        public HomePageController(IHomePageExperiments homePageExperiments) =>
            _experiments = homePageExperiments.GetExperiments();

        [HttpGet]
        public HomePageResponse Get() => new()
        {
            Title = "Client-Side Routing, Baby!",
            Experiments = _experiments
        };
    }
}
