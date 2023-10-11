using SQLite;

namespace AutoShop.Models
{
    public class Component
    {
        [PrimaryKey]
        [NotNull]
        [AutoIncrement]

        public int IdComponent { get; set; }
        public string Name { get; set; }
        public int Price { get; set; }
        public int Stock { get; set; }
    }
}
