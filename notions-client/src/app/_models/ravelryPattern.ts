export interface RavelryPattern {
    pattern: Pattern
  }
  
  export interface Pattern {
    comments_count: number
    created_at: string
    currency: string
    difficulty_average: number
    difficulty_count: number
    downloadable: boolean
    favorites_count: number
    free: boolean
    gauge: number
    gauge_divisor: number
    gauge_pattern: string
    generally_available: string
    has_uk_terminology: boolean
    has_us_terminology: boolean
    id: number
    name: string
    pdf_url: string
    permalink: string
    price: any
    projects_count: number
    published: string
    queued_projects_count: number
    rating_average: number
    rating_count: number
    row_gauge: number
    updated_at: string
    url: string
    yardage: number
    yardage_max: number
    yarn_list_type: any
    personal_attributes: any
    sizes_available: string
    product_id: any
    unlisted_product_ids: any
    currency_symbol: string
    ravelry_download: boolean
    download_location: any
    pdf_in_library: boolean
    volumes_in_library: any
    gauge_description: string
    yarn_weight_description: string
    yardage_description: string
    pattern_needle_sizes: PatternNeedleSize[]
    notes_html: string
    notes: string
    languages: Language[]
    packs: Pack[]
    printings: Printing[]
    yarn_weight: YarnWeight2
    craft: Craft
    pattern_categories: PatternCategory[]
    pattern_attributes: PatternAttribute[]
    pattern_author: PatternAuthor
    photos: Photo[]
    pattern_type: PatternType
  }
  
  export interface PatternNeedleSize {
    id: number
    us: string
    metric: number
    us_steel: any
    crochet: boolean
    knitting: boolean
    hook: string
    name: string
    pretty_metric: string
  }
  
  export interface Language {
    code: string
    id: number
    name: string
    permalink: string
    short_name: string
    universal: boolean
  }
  
  export interface Pack {
    id: number
    primary_pack_id: any
    project_id: any
    skeins: any
    stash_id: any
    total_grams: any
    total_meters: any
    total_ounces: any
    total_yards: any
    yarn_id: number
    yarn_name: string
    yarn_weight: YarnWeight
    colorway: any
    shop_name: any
    yarn: Yarn
    quantity_description: any
    personal_name: string
    dye_lot: any
    color_family_id: any
    grams_per_skein: number
    yards_per_skein: number
    meters_per_skein: number
    ounces_per_skein: number
    prefer_metric_weight: boolean
    prefer_metric_length: boolean
    shop_id: any
    thread_size: any
  }
  
  export interface YarnWeight {
    crochet_gauge: string
    id: number
    knit_gauge: string
    max_gauge: any
    min_gauge: any
    name: string
    ply: string
    wpi: string
  }
  
  export interface Yarn {
    permalink: string
    id: number
    name: string
    yarn_company_name: string
    yarn_company_id: number
  }
  
  export interface Printing {
    created_at: string
    id: number
    pattern_id: number
    pattern_not_available: boolean
    primary_source: boolean
    pattern_source: PatternSource
  }
  
  export interface PatternSource {
    amazon_rating: any
    amazon_url: string
    author: string
    id: number
    list_price: string
    name: string
    out_of_print: boolean
    pattern_source_type_id: number
    patterns_count: number
    permalink: string
    price: string
    shelf_image_path: string
    url: string
    pattern_source_type: PatternSourceType
  }
  
  export interface PatternSourceType {
    id: number
    name: string
    requires_url: boolean
    long_name: string
    can_add_to_library: boolean
  }
  
  export interface YarnWeight2 {
    crochet_gauge: string
    id: number
    knit_gauge: string
    max_gauge: any
    min_gauge: any
    name: string
    ply: string
    wpi: string
  }
  
  export interface Craft {
    id: number
    name: string
    permalink: string
  }
  
  export interface PatternCategory {
    id: number
    name: string
    permalink: string
    parent: Parent
  }
  
  export interface Parent {
    id: number
    name: string
    permalink: string
    parent: Parent2
  }
  
  export interface Parent2 {
    id: number
    name: string
    permalink: string
    parent: Parent3
  }
  
  export interface Parent3 {
    id: number
    name: string
    permalink: string
  }
  
  export interface PatternAttribute {
    id: number
    permalink: string
  }
  
  export interface PatternAuthor {
    crochet_pattern_count: number
    favorites_count: number
    id: number
    knitting_pattern_count: number
    name: string
    patterns_count: number
    permalink: string
    notes: string
    notes_html: any
    users: User[]
  }
  
  export interface User {
    fave_colors: string
    fave_curse: string
    first_name: string
    id: number
    location: string
    username: string
    tiny_photo_url: string
    small_photo_url: string
    photo_url: string
    large_photo_url: string
    about_me: string
    about_me_html: string
    pattern_author: PatternAuthor2
    user_sites: UserSite[]
  }
  
  export interface PatternAuthor2 {
    favorites_count: number
    id: number
    name: string
    patterns_count: number
    permalink: string
  }
  
  export interface UserSite {
    id: number
    username: string
    url: string
    social_site: SocialSite
  }
  
  export interface SocialSite {
    id: number
    name: string
    favicon_url: string
    active: boolean
  }
  
  export interface Photo {
    id: number
    sort_order: number
    user_id: number
    x_offset: number
    y_offset: number
    square_url: string
    medium_url: string
    thumbnail_url: string
    small_url: string
    flickr_url?: string
    shelved_url: any
    medium2_url: string
    small2_url: string
    caption: any
    caption_html: any
    copyright_holder: any
  }
  
  export interface PatternType {
    clothing: boolean
    id: number
    name: string
    permalink: string
  }
  