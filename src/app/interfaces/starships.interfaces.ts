
export interface StarShips {
    count:    number;
    next:     string;
    previous: null;
    results:  Result[];
}

export interface Result {
    MGLT:                   string;
    cargo_capacity:         string;
    consumables:            string;
    cost_in_credits:        string;
    created:                Date;
    crew:                   string;
    edited:                 Date;
    films:                  string[];
    hyperdrive_rating:      string;
    length:                 string;
    manufacturer:           string;
    max_atmosphering_speed: string;
    model:                  string;
    name:                   string;
    passengers:             string;
    pilots:                 string[];
    starship_class:         string;
    url:                    string;
}
export interface pilots {
    birth_year: string;
    created:    Date;
    edited:     Date;
    eye_color:  string;
    films:      string[];
    gender:     string;
    hair_color: string;
    height:     string;
    homeworld:  string;
    mass:       string;
    name:       string;
    skin_color: string;
    species:    string[];
    starships:  string[];
    url:        string;
    vehicles:   string[];
}