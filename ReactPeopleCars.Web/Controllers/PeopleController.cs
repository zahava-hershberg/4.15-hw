using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using ReactPeopleCars.Data;

namespace ReactPeopleCars.Web.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class PeopleController : ControllerBase
    {
        private readonly string _connectionString;
        public PeopleController(IConfiguration configuration)
        {
            _connectionString = configuration.GetConnectionString("ConStr");
        }
        [HttpGet("getall")]
        public List<Person> GetAll()
        {
            var repo = new PeopleCarRepo(_connectionString);
            return repo.GetAll();
        }
        [HttpPost]
        [Route("addperson")]
        public void AddPerson(Person person)
        {
            var repo = new PeopleCarRepo(_connectionString);
            repo.AddPerson(person);
        }
        [HttpGet("getbyid")]
        public Person GetById(int id)
        {
            var repo = new PeopleCarRepo(_connectionString);
            return repo.GetById(id);
        }
      
    }
}
