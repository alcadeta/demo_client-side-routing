using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Backend.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;

namespace Backend.Controllers
{
    [ApiController]
    [Route("/")]
    public class HomePageController : ControllerBase
    {
        [HttpGet]
        public HomePageResponse Get()
        {
            return new()
            {
                Title = "Client Side Routing, Baby!"
            };
        }
    }
}
