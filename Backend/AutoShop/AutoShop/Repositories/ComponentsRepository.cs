using AutoShop.Models;
using SQLite;

namespace AutoShop.Repositories
{
    public static class ComponentsRepository
    {
        private static SQLiteAsyncConnection database;
        static ComponentsRepository()
        {
            var applicationPath = Path.GetDirectoryName(typeof(ComponentsRepository).Assembly.Location);
            var databasePath = Path.Combine(applicationPath, "data1.db");
            database = new SQLiteAsyncConnection(databasePath);
            database.CreateTableAsync<Component>().Wait();

        }

        public static async Task<List<Component>> GetAll()
        {
            return await database.Table<Component>().ToListAsync();

        }
        public static async Task<Component> GetComponent(int id)
        {
           
            return await database.Table<Component>().FirstOrDefaultAsync(component => component.IdComponent == id);
            
        }

        public static async Task<Component> AddComponent(Component component) 
        {
            await database.InsertAsync(component);
            return component;
        }

        public static async Task<Component> UpdateComponent(int id, Component updatedComponent)
        {
            Component existingComponent = await GetComponent(id);

            existingComponent.Name = updatedComponent.Name;
            existingComponent.Price = updatedComponent.Price;
            existingComponent.Stock = updatedComponent.Stock;
            await database.UpdateAsync(existingComponent);
            return existingComponent;
        }

        public static async Task<Component> DeleteComponent(int id)
        {
            Component wantedComponent = await GetComponent(id);
            await database.Table<Component>().DeleteAsync(component => component.IdComponent == id); // sa se stie ca id ul din table ul Component
            return wantedComponent;
        }

    }
}
