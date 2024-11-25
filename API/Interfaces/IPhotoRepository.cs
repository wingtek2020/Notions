using API.Entities;

namespace API.Interfaces
{
    public interface IPhotoRepository
    {
        public void RemovePhoto(Photo photo);
        public Task<Photo> GetPhotoById(int id);
    }
}
