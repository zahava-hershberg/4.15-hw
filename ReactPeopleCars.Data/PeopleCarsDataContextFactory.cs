using Microsoft.EntityFrameworkCore.Design;
using Microsoft.Extensions.Configuration;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ReactPeopleCars.Data;
public class PeopleCarsDataContextFactory : IDesignTimeDbContextFactory<PeopleCarsDataContext>
{
    public PeopleCarsDataContext CreateDbContext(string[] args)
    {
        var config = new ConfigurationBuilder()
           .SetBasePath(Path.Combine(Directory.GetCurrentDirectory(),
           $"..{Path.DirectorySeparatorChar}ReactPeopleCars.Web"))
           .AddJsonFile("appsettings.json")
           .AddJsonFile("appsettings.local.json", optional: true, reloadOnChange: true).Build();

        return new PeopleCarsDataContext(config.GetConnectionString("ConStr"));
    }
}
