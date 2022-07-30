using Microsoft.EntityFrameworkCore;

namespace LoginSystem.Models
{
    public class MayurPatil_DBContext : DbContext
    {
        public MayurPatil_DBContext()
        { }
        public MayurPatil_DBContext(DbContextOptions<MayurPatil_DBContext> options) : base(options)
        { }
        public virtual DbSet<MayurPatil_DB> mpatil_login { get; set; }
    
    }
}
