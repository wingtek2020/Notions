using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using API.Data;
using API.Entities;
using Microsoft.AspNetCore.Authorization;
using API.Interfaces;
using AutoMapper;
using API.DTOs;
using System.Security.Claims;

namespace API.Controllers
{
   
    public class UsersController(IUserRepository userRepository, IMapper mapper) : BaseApiController
    {
        // GET: Users
        [HttpGet]
        public async Task<ActionResult<IEnumerable<MemberDto>>> GetUsers()
        {
            var users = await userRepository.GetMembersAsync();
            
            return Ok(users);
        }

        [HttpGet("{username}")]
        public async Task<ActionResult<MemberDto>> GetUser(string username)
        {
            var user = await userRepository.GetMemberAsync(username);

            if (user == null) return NotFound();


            return user;
        }

        [HttpPut]
        public async Task <ActionResult> UpdateUser(MemberUpdateDto memberUpdateDto)
        {
            var username = memberUpdateDto.Username;

            if (username == null) return BadRequest("No username found in token");

                var user = await userRepository.GetUserByUsernameAsync(username);

            if (user == null) return BadRequest("Could not find user");
            mapper.Map(memberUpdateDto, user);

            if (await userRepository.SaveAllAsync()) return NoContent();

            return BadRequest("Failed to update the user");


        }

    }
}
