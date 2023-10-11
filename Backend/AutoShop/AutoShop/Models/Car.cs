using SQLite;
using System.Runtime.InteropServices;

namespace AutoShop.Models
{
    public class Car
    {
        [PrimaryKey]
        [NotNull]
        [AutoIncrement]




        public int IdCar { get; set; }
        public string Brand { get; set; }
        public string Model { get; set; }
        public int ProductionYear { get; set; }
        public int Stock { get; set; }

        

    }
}
