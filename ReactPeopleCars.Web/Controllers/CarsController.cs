using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using ReactPeopleCars.Data;
using ReactPeopleCars.Web.Models;

namespace ReactPeopleCars.Web.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CarsController : ControllerBase
    {
        private readonly string _connectionString;
        public CarsController(IConfiguration configuration)
        {
            _connectionString = configuration.GetConnectionString("ConStr");
        }
        [HttpPost]
        [Route("addcar")]
        public void Add(Car car)
        {
            var repo = new PeopleCarRepo(_connectionString);
            repo.AddCar(car);
        }
        [HttpGet("getcarsbyid")]
        public List<Car> GetCars(int id)
        {
            var repo = new PeopleCarRepo(_connectionString);
            return repo.GetCarsById(id);
        }
        [HttpPost("deletecars")]
        public void DeleteCars(DeleteViewModel vm)
        {
            var repo = new PeopleCarRepo(_connectionString);
            repo.DeleteCars(vm.Id);
        }

    }
}
