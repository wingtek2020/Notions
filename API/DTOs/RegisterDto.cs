﻿using System.ComponentModel.DataAnnotations;

namespace API.DTOs
{
    public class RegisterDto
    {
        [Required]
        public string Password { get; set; } = string.Empty;
        [Required]
        [StringLength(8, MinimumLength = 1)]
        public string Username { get; set; } = string.Empty;
    }
}
