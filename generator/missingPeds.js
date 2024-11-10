import {getDataFromGithub, githubUrl, writeToFile} from './_helper.js';

const oldPed = {
    "PedList": {
        "Category": [
            {
                "Ped": [
                    {
                        "_name": "player_zero",
                        "_caption": "Michael"
                    },
                    {
                        "_name": "player_one",
                        "_caption": "Franklin"
                    },
                    {
                        "_name": "p_franklin_02",
                        "_caption": "Franklin Aged"
                    },
                    {
                        "_name": "player_two",
                        "_caption": "Trevor"
                    },
                    {
                        "_name": "mp_f_freemode_01",
                        "_caption": "Freemode MP Female"
                    },
                    {
                        "_name": "mp_m_freemode_01",
                        "_caption": "Freemode MP Male"
                    }
                ],
                "_name": "Player"
            },
            {
                "Ped": [
                    {
                        "_name": "a_c_boar",
                        "_caption": "Boar"
                    },
                    {
                        "_name": "a_c_boar_02",
                        "_caption": "Boar 2 (Halloween)"
                    },
                    {
                        "_name": "a_c_cat_01",
                        "_caption": "Cat"
                    },
                    {
                        "_name": "a_c_chickenhawk",
                        "_caption": "Hawk"
                    },
                    {
                        "_name": "a_c_chimp",
                        "_caption": "Chimp 2"
                    },
                    {
                        "_name": "a_c_chimp_02",
                        "_caption": "Chimp"
                    },
                    {
                        "_name": "a_c_chop",
                        "_caption": "Chop (Young)"
                    },
                    {
                        "_name": "a_c_chop_02",
                        "_caption": "Chop (Old)"
                    },
                    {
                        "_name": "a_c_cormorant",
                        "_caption": "Cormorant"
                    },
                    {
                        "_name": "a_c_cow",
                        "_caption": "Cow"
                    },
                    {
                        "_name": "a_c_coyote",
                        "_caption": "Coyote"
                    },
                    {
                        "_name": "a_c_coyote_02",
                        "_caption": "Coyote (Halloween)"
                    },
                    {
                        "_name": "a_c_crow",
                        "_caption": "Crow"
                    },
                    {
                        "_name": "a_c_deer",
                        "_caption": "Deer"
                    },
                    {
                        "_name": "a_c_deer_02",
                        "_caption": "Deer (Halloween)"
                    },
                    {
                        "_name": "a_c_dolphin",
                        "_caption": "Dolphin"
                    },
                    {
                        "_name": "a_c_fish",
                        "_caption": "Fish"
                    },
                    {
                        "_name": "a_c_hen",
                        "_caption": "Hen"
                    },
                    {
                        "_name": "a_c_humpback",
                        "_caption": "Humpback Whale"
                    },
                    {
                        "_name": "a_c_husky",
                        "_caption": "Husky"
                    },
                    {
                        "_name": "a_c_killerwhale",
                        "_caption": "Killer Whale"
                    },
                    {
                        "_name": "a_c_mtlion",
                        "_caption": "Mountain Lion"
                    },
                    {
                        "_name": "a_c_mtlion_02",
                        "_caption": "Mountain Lion (Halloween)"
                    },
                    {
                        "_name": "a_c_pig",
                        "_caption": "Pig"
                    },
                    {
                        "_name": "a_c_pigeon",
                        "_caption": "Pigeon"
                    },
                    {
                        "_name": "a_c_poodle",
                        "_caption": "Poodle"
                    },
                    {
                        "_name": "a_c_pug",
                        "_caption": "Pug (Halloween)"
                    },
                    {
                        "_name": "a_c_pug",
                        "_caption": "Pug"
                    },
                    {
                        "_name": "a_c_rabbit_01",
                        "_caption": "Rabbit"
                    },
                    {
                        "_name": "a_c_rabbit_02",
                        "_caption": "Rabbit (Huge)"
                    },
                    {
                        "_name": "a_c_rat",
                        "_caption": "Rat"
                    },
                    {
                        "_name": "a_c_retriever",
                        "_caption": "Retriever"
                    },
                    {
                        "_name": "a_c_rhesus",
                        "_caption": "Rhesus The Chimp"
                    },
                    {
                        "_name": "a_c_rottweiler",
                        "_caption": "Rottweiler"
                    },
                    {
                        "_name": "a_c_seagull",
                        "_caption": "Seagull"
                    },
                    {
                        "_name": "a_c_sharkhammer",
                        "_caption": "Hammerhead Shark"
                    },
                    {
                        "_name": "a_c_sharktiger",
                        "_caption": "Tiger Shark"
                    },
                    {
                        "_name": "a_c_shepherd",
                        "_caption": "Australian Shepherd"
                    },
                    {
                        "_name": "a_c_stingray",
                        "_caption": "Stingray"
                    },
                    {
                        "_name": "a_c_westy",
                        "_caption": "Westie"
                    },
                    {
                        "_name": "a_c_panther",
                        "_caption": "Panther"
                    }
                ],
                "_name": "Animal"
            },
            {
                "Ped": [
                    {
                        "_name": "a_f_m_beach_01",
                        "_caption": "Beach Female"
                    },
                    {
                        "_name": "a_f_m_bevhills_01",
                        "_caption": "Beverly Hills Female"
                    },
                    {
                        "_name": "a_f_m_bevhills_02",
                        "_caption": "Beverly Hills Female 2"
                    },
                    {
                        "_name": "a_f_m_bodybuild_01",
                        "_caption": "Bodybuilder Female"
                    },
                    {
                        "_name": "a_f_m_business_02",
                        "_caption": "Business Female 2"
                    },
                    {
                        "_name": "a_f_m_downtown_01",
                        "_caption": "Downtown Female"
                    },
                    {
                        "_name": "a_f_m_eastsa_01",
                        "_caption": "East SA Female"
                    },
                    {
                        "_name": "a_f_m_eastsa_02",
                        "_caption": "East SA Female 2"
                    },
                    {
                        "_name": "a_f_m_fatbla_01",
                        "_caption": "Fat Black Female"
                    },
                    {
                        "_name": "a_f_m_fatcult_01",
                        "_caption": "Fat Cult Female"
                    },
                    {
                        "_name": "a_f_m_fatwhite_01",
                        "_caption": "Fat White Female"
                    },
                    {
                        "_name": "a_f_m_genbiker_01",
                        "_caption": "General Biker Female"
                    },
                    {
                        "_name": "a_f_m_genstreet_01",
                        "_caption": "General Street Young Female"
                    },
                    {
                        "_name": "a_f_m_ktown_01",
                        "_caption": "Korean Female"
                    },
                    {
                        "_name": "a_f_m_ktown_02",
                        "_caption": "Korean Female 2"
                    },
                    {
                        "_name": "a_f_m_prolhost_01",
                        "_caption": "Prologue Host Female"
                    },
                    {
                        "_name": "a_f_m_salton_01",
                        "_caption": "Salton Female"
                    },
                    {
                        "_name": "a_f_m_skidrow_01",
                        "_caption": "Skid Row Female"
                    },
                    {
                        "_name": "a_f_m_soucent_01",
                        "_caption": "South Central Female"
                    },
                    {
                        "_name": "a_f_m_soucent_02",
                        "_caption": "South Central Female 2"
                    },
                    {
                        "_name": "a_f_m_soucentmc_01",
                        "_caption": "South Central MC Female"
                    },
                    {
                        "_name": "a_f_m_tourist_01",
                        "_caption": "Tourist Female"
                    },
                    {
                        "_name": "a_f_m_tramp_01",
                        "_caption": "Tramp Female"
                    },
                    {
                        "_name": "a_f_m_trampbeac_01",
                        "_caption": "Beach Tramp Female"
                    },
                    {
                        "_name": "a_f_o_genstreet_01",
                        "_caption": "General Street Old Female"
                    },
                    {
                        "_name": "a_f_o_indian_01",
                        "_caption": "Indian Old Female"
                    },
                    {
                        "_name": "a_f_o_ktown_01",
                        "_caption": "Korean Old Female"
                    },
                    {
                        "_name": "a_f_o_salton_01",
                        "_caption": "Salton Old Female"
                    },
                    {
                        "_name": "a_f_o_soucent_01",
                        "_caption": "South Central Old Female"
                    },
                    {
                        "_name": "a_f_o_soucent_02",
                        "_caption": "South Central Old Female 2"
                    },
                    {
                        "_name": "a_f_y_beach_01",
                        "_caption": "Beach Young Female"
                    },
                    {
                        "_name": "a_f_y_bevhills_01",
                        "_caption": "Beverly Hills Young Female"
                    },
                    {
                        "_name": "a_f_y_bevhills_02",
                        "_caption": "Beverly Hills Young Female 2"
                    },
                    {
                        "_name": "a_f_y_bevhills_03",
                        "_caption": "Beverly Hills Young Female 3"
                    },
                    {
                        "_name": "a_f_y_bevhills_04",
                        "_caption": "Beverly Hills Young Female 4"
                    },
                    {
                        "_name": "a_f_y_bevhills_05",
                        "_caption": "Beverly Hills Young Female 5"
                    },
                    {
                        "_name": "a_f_y_business_01",
                        "_caption": "Business Young Female"
                    },
                    {
                        "_name": "a_f_y_business_02",
                        "_caption": "Business Young Female 2"
                    },
                    {
                        "_name": "a_f_y_business_03",
                        "_caption": "Business Young Female 3"
                    },
                    {
                        "_name": "a_f_y_business_04",
                        "_caption": "Business Young Female 4"
                    },
                    {
                        "_name": "a_f_y_carclub_01",
                        "_caption": "Car Club Female"
                    },
                    {
                        "_name": "a_f_y_clubcust_01",
                        "_caption": "Club Customer Female 1"
                    },
                    {
                        "_name": "a_f_y_clubcust_02",
                        "_caption": "Club Customer Female 2"
                    },
                    {
                        "_name": "a_f_y_clubcust_03",
                        "_caption": "Club Customer Female 3"
                    },
                    {
                        "_name": "a_f_y_eastsa_01",
                        "_caption": "East SA Young Female"
                    },
                    {
                        "_name": "a_f_y_eastsa_02",
                        "_caption": "East SA Young Female 2"
                    },
                    {
                        "_name": "a_f_y_eastsa_03",
                        "_caption": "East SA Young Female 3"
                    },
                    {
                        "_name": "a_f_y_epsilon_01",
                        "_caption": "Epsilon Female"
                    },
                    {
                        "_name": "a_f_y_femaleagent",
                        "_caption": "Female Agent"
                    },
                    {
                        "_name": "a_f_y_fitness_01",
                        "_caption": "Fitness Female"
                    },
                    {
                        "_name": "a_f_y_fitness_02",
                        "_caption": "Fitness Female 2"
                    },
                    {
                        "_name": "a_f_y_gencaspat_01",
                        "_caption": "Casual Casino Guest"
                    },
                    {
                        "_name": "a_f_y_genhot_01",
                        "_caption": "General Hot Young Female"
                    },
                    {
                        "_name": "a_f_y_golfer_01",
                        "_caption": "Golfer Young Female"
                    },
                    {
                        "_name": "a_f_y_hiker_01",
                        "_caption": "Hiker Female"
                    },
                    {
                        "_name": "a_f_y_hippie_01",
                        "_caption": "Hippie Female"
                    },
                    {
                        "_name": "a_f_y_hipster_01",
                        "_caption": "Hipster Female"
                    },
                    {
                        "_name": "a_f_y_hipster_02",
                        "_caption": "Hipster Female 2"
                    },
                    {
                        "_name": "a_f_y_hipster_03",
                        "_caption": "Hipster Female 3"
                    },
                    {
                        "_name": "a_f_y_hipster_04",
                        "_caption": "Hipster Female 4"
                    },
                    {
                        "_name": "a_f_y_indian_01",
                        "_caption": "Indian Young Female"
                    },
                    {
                        "_name": "a_f_y_juggalo_01",
                        "_caption": "Juggalo Female"
                    },
                    {
                        "_name": "a_f_y_runner_01",
                        "_caption": "Jogger Female"
                    },
                    {
                        "_name": "a_f_y_rurmeth_01",
                        "_caption": "Rural Meth Addict Female"
                    },
                    {
                        "_name": "a_f_y_scdressy_01",
                        "_caption": "Dressy Female"
                    },
                    {
                        "_name": "a_f_y_skater_01",
                        "_caption": "Skater Female"
                    },
                    {
                        "_name": "a_f_y_smartcaspat_01",
                        "_caption": "Formal Casino Guest"
                    },
                    {
                        "_name": "a_f_y_soucent_01",
                        "_caption": "South Central Young Female"
                    },
                    {
                        "_name": "a_f_y_soucent_02",
                        "_caption": "South Central Young Female 2"
                    },
                    {
                        "_name": "a_f_y_soucent_03",
                        "_caption": "South Central Young Female 3"
                    },
                    {
                        "_name": "a_f_y_studioparty_01",
                        "_caption": "Studio Party Female"
                    },
                    {
                        "_name": "a_f_y_studioparty_02",
                        "_caption": "Studio Party Female 2"
                    },
                    {
                        "_name": "a_f_y_tennis_01",
                        "_caption": "Tennis Player Female"
                    },
                    {
                        "_name": "a_f_y_topless_01",
                        "_caption": "Topless"
                    },
                    {
                        "_name": "a_f_y_tourist_01",
                        "_caption": "Tourist Young Female"
                    },
                    {
                        "_name": "a_f_y_tourist_02",
                        "_caption": "Tourist Young Female 2"
                    },
                    {
                        "_name": "a_f_y_vinewood_01",
                        "_caption": "Vinewood Female"
                    },
                    {
                        "_name": "a_f_y_vinewood_02",
                        "_caption": "Vinewood Female 2"
                    },
                    {
                        "_name": "a_f_y_vinewood_03",
                        "_caption": "Vinewood Female 3"
                    },
                    {
                        "_name": "a_f_y_vinewood_04",
                        "_caption": "Vinewood Female 4"
                    },
                    {
                        "_name": "a_f_y_yoga_01",
                        "_caption": "Yoga Female"
                    },
                    {
                        "_name": "a_f_y_beach_02",
                        "_caption": "Beach Young Female 2"
                    },
                    {
                        "_name": "a_f_y_clubcust_04",
                        "_caption": "Club Customer Female 4"
                    }
                ],
                "_name": "AmbientFemale"
            },
            {
                "Ped": [
                    {
                        "_name": "a_m_m_acult_01",
                        "_caption": "Altruist Cult Mid-Age Male"
                    },
                    {
                        "_name": "a_m_m_afriamer_01",
                        "_caption": "African American Male"
                    },
                    {
                        "_name": "a_m_m_bankrobber_01",
                        "_caption": "Bank Robber Male"
                    },
                    {
                        "_name": "a_m_m_beach_01",
                        "_caption": "Beach Male"
                    },
                    {
                        "_name": "a_m_m_beach_02",
                        "_caption": "Beach Male 2"
                    },
                    {
                        "_name": "a_m_m_bevhills_01",
                        "_caption": "Beverly Hills Male"
                    },
                    {
                        "_name": "a_m_m_bevhills_02",
                        "_caption": "Beverly Hills Male 2"
                    },
                    {
                        "_name": "a_m_m_business_01",
                        "_caption": "Business Male"
                    },
                    {
                        "_name": "a_m_m_eastsa_01",
                        "_caption": "East SA Male"
                    },
                    {
                        "_name": "a_m_m_eastsa_02",
                        "_caption": "East SA Male 2"
                    },
                    {
                        "_name": "a_m_m_farmer_01",
                        "_caption": "Farmer"
                    },
                    {
                        "_name": "a_m_m_fatlatin_01",
                        "_caption": "Fat Latino Male"
                    },
                    {
                        "_name": "a_m_m_genbiker_01",
                        "_caption": "General Biker Male"
                    },
                    {
                        "_name": "a_m_m_genfat_01",
                        "_caption": "General Fat Male"
                    },
                    {
                        "_name": "a_m_m_genfat_02",
                        "_caption": "General Fat Male 2"
                    },
                    {
                        "_name": "a_m_m_golfer_01",
                        "_caption": "Golfer Male"
                    },
                    {
                        "_name": "a_m_m_hasjew_01",
                        "_caption": "Hasidic Jew Male"
                    },
                    {
                        "_name": "a_m_m_hillbilly_01",
                        "_caption": "Hillbilly Male"
                    },
                    {
                        "_name": "a_m_m_hillbilly_02",
                        "_caption": "Hillbilly Male 2"
                    },
                    {
                        "_name": "a_m_m_indian_01",
                        "_caption": "Indian Male"
                    },
                    {
                        "_name": "a_m_m_ktown_01",
                        "_caption": "Korean Male"
                    },
                    {
                        "_name": "a_m_m_malibu_01",
                        "_caption": "Malibu Male"
                    },
                    {
                        "_name": "a_m_m_mexcntry_01",
                        "_caption": "Mexican Rural"
                    },
                    {
                        "_name": "a_m_m_mexlabor_01",
                        "_caption": "Mexican Labourer"
                    },
                    {
                        "_name": "a_m_m_mlcrisis_01",
                        "_caption": "Midlife Crisis Casino Bikers"
                    },
                    {
                        "_name": "a_m_m_og_boss_01",
                        "_caption": "OG Boss"
                    },
                    {
                        "_name": "a_m_m_paparazzi_01",
                        "_caption": "Paparazzi Male"
                    },
                    {
                        "_name": "a_m_m_polynesian_01",
                        "_caption": "Polynesian"
                    },
                    {
                        "_name": "a_m_m_prolhost_01",
                        "_caption": "Prologue Host Male"
                    },
                    {
                        "_name": "a_m_m_rurmeth_01",
                        "_caption": "Rural Meth Addict Male"
                    },
                    {
                        "_name": "a_m_m_salton_01",
                        "_caption": "Salton Male"
                    },
                    {
                        "_name": "a_m_m_salton_02",
                        "_caption": "Salton Male 2"
                    },
                    {
                        "_name": "a_m_m_salton_03",
                        "_caption": "Salton Male 3"
                    },
                    {
                        "_name": "a_m_m_salton_04",
                        "_caption": "Salton Male 4"
                    },
                    {
                        "_name": "a_m_m_skater_01",
                        "_caption": "Skater Male"
                    },
                    {
                        "_name": "a_m_m_skidrow_01",
                        "_caption": "Skid Row Male"
                    },
                    {
                        "_name": "a_m_m_socenlat_01",
                        "_caption": "South Central Latino Male"
                    },
                    {
                        "_name": "a_m_m_soucent_01",
                        "_caption": "South Central Male"
                    },
                    {
                        "_name": "a_m_m_soucent_02",
                        "_caption": "South Central Male 2"
                    },
                    {
                        "_name": "a_m_m_soucent_03",
                        "_caption": "South Central Male 3"
                    },
                    {
                        "_name": "a_m_m_soucent_04",
                        "_caption": "South Central Male 4"
                    },
                    {
                        "_name": "a_m_m_stlat_02",
                        "_caption": "Latino Street Male 2"
                    },
                    {
                        "_name": "a_m_m_tennis_01",
                        "_caption": "Tennis Player Male"
                    },
                    {
                        "_name": "a_m_m_tourist_01",
                        "_caption": "Tourist Male"
                    },
                    {
                        "_name": "a_m_m_tramp_01",
                        "_caption": "Tramp Male"
                    },
                    {
                        "_name": "a_m_m_trampbeac_01",
                        "_caption": "Beach Tramp Male"
                    },
                    {
                        "_name": "a_m_m_tranvest_01",
                        "_caption": "Transvestite Male"
                    },
                    {
                        "_name": "a_m_m_tranvest_02",
                        "_caption": "Transvestite Male 2"
                    },
                    {
                        "_name": "a_m_n_studioparty_01",
                        "_caption": "Studio Party Male"
                    },
                    {
                        "_name": "a_m_o_acult_01",
                        "_caption": "Altruist Cult Old Male"
                    },
                    {
                        "_name": "a_m_o_acult_02",
                        "_caption": "Altruist Cult Old Male 2"
                    },
                    {
                        "_name": "a_m_o_beach_01",
                        "_caption": "Beach Old Male"
                    },
                    {
                        "_name": "a_m_o_genstreet_01",
                        "_caption": "General Street Old Male"
                    },
                    {
                        "_name": "a_m_o_ktown_01",
                        "_caption": "Korean Old Male"
                    },
                    {
                        "_name": "a_m_o_salton_01",
                        "_caption": "Salton Old Male"
                    },
                    {
                        "_name": "a_m_o_soucent_01",
                        "_caption": "South Central Old Male"
                    },
                    {
                        "_name": "a_m_o_soucent_02",
                        "_caption": "South Central Old Male 2"
                    },
                    {
                        "_name": "a_m_o_soucent_03",
                        "_caption": "South Central Old Male 3"
                    },
                    {
                        "_name": "a_m_o_tramp_01",
                        "_caption": "Tramp Old Male"
                    },
                    {
                        "_name": "a_m_y_acult_01",
                        "_caption": "Altruist Cult Young Male"
                    },
                    {
                        "_name": "a_m_y_acult_02",
                        "_caption": "Altruist Cult Young Male 2"
                    },
                    {
                        "_name": "a_m_y_beach_01",
                        "_caption": "Beach Young Male"
                    },
                    {
                        "_name": "a_m_y_beach_02",
                        "_caption": "Beach Young Male 2"
                    },
                    {
                        "_name": "a_m_y_beach_03",
                        "_caption": "Beach Young Male 3"
                    },
                    {
                        "_name": "a_m_y_beachvesp_01",
                        "_caption": "Vespucci Beach Male"
                    },
                    {
                        "_name": "a_m_y_beachvesp_02",
                        "_caption": "Vespucci Beach Male 2"
                    },
                    {
                        "_name": "a_m_y_bevhills_01",
                        "_caption": "Beverly Hills Young Male"
                    },
                    {
                        "_name": "a_m_y_bevhills_02",
                        "_caption": "Beverly Hills Young Male 2"
                    },
                    {
                        "_name": "a_m_y_breakdance_01",
                        "_caption": "Breakdancer Male"
                    },
                    {
                        "_name": "a_m_y_busicas_01",
                        "_caption": "Business Casual"
                    },
                    {
                        "_name": "a_m_y_business_01",
                        "_caption": "Business Young Male"
                    },
                    {
                        "_name": "a_m_y_business_02",
                        "_caption": "Business Young Male 2"
                    },
                    {
                        "_name": "a_m_y_business_03",
                        "_caption": "Business Young Male 3"
                    },
                    {
                        "_name": "a_m_y_carclub_01",
                        "_caption": "Car Club Male"
                    },
                    {
                        "_name": "a_m_y_clubcust_01",
                        "_caption": "Club Customer Male 1"
                    },
                    {
                        "_name": "a_m_y_clubcust_02",
                        "_caption": "Club Customer Male 2"
                    },
                    {
                        "_name": "a_m_y_clubcust_03",
                        "_caption": "Club Customer Male 3"
                    },
                    {
                        "_name": "a_m_y_cyclist_01",
                        "_caption": "Cyclist Male"
                    },
                    {
                        "_name": "a_m_y_dhill_01",
                        "_caption": "Downhill Cyclist"
                    },
                    {
                        "_name": "a_m_y_downtown_01",
                        "_caption": "Downtown Male"
                    },
                    {
                        "_name": "a_m_y_eastsa_01",
                        "_caption": "East SA Young Male"
                    },
                    {
                        "_name": "a_m_y_eastsa_02",
                        "_caption": "East SA Young Male 2"
                    },
                    {
                        "_name": "a_m_y_epsilon_01",
                        "_caption": "Epsilon Male"
                    },
                    {
                        "_name": "a_m_y_epsilon_02",
                        "_caption": "Epsilon Male 2"
                    },
                    {
                        "_name": "a_m_y_gay_01",
                        "_caption": "Gay Male"
                    },
                    {
                        "_name": "a_m_y_gay_02",
                        "_caption": "Gay Male 2"
                    },
                    {
                        "_name": "a_m_y_gencaspat_01",
                        "_caption": "Casual Casino Guests"
                    },
                    {
                        "_name": "a_m_y_genstreet_01",
                        "_caption": "General Street Young Male"
                    },
                    {
                        "_name": "a_m_y_genstreet_02",
                        "_caption": "General Street Young Male 2"
                    },
                    {
                        "_name": "a_m_y_golfer_01",
                        "_caption": "Golfer Young Male"
                    },
                    {
                        "_name": "a_m_y_hasjew_01",
                        "_caption": "Hasidic Jew Young Male"
                    },
                    {
                        "_name": "a_m_y_hiker_01",
                        "_caption": "Hiker Male"
                    },
                    {
                        "_name": "a_m_y_hippy_01",
                        "_caption": "Hippie Male"
                    },
                    {
                        "_name": "a_m_y_hipster_01",
                        "_caption": "Hipster Male"
                    },
                    {
                        "_name": "a_m_y_hipster_02",
                        "_caption": "Hipster Male 2"
                    },
                    {
                        "_name": "a_m_y_hipster_03",
                        "_caption": "Hipster Male 3"
                    },
                    {
                        "_name": "a_m_y_indian_01",
                        "_caption": "Indian Young Male"
                    },
                    {
                        "_name": "a_m_y_jetski_01",
                        "_caption": "Jetskier"
                    },
                    {
                        "_name": "a_m_y_juggalo_01",
                        "_caption": "Juggalo Male"
                    },
                    {
                        "_name": "a_m_y_ktown_01",
                        "_caption": "Korean Young Male"
                    },
                    {
                        "_name": "a_m_y_ktown_02",
                        "_caption": "Korean Young Male 2"
                    },
                    {
                        "_name": "a_m_y_latino_01",
                        "_caption": "Latino Young Male"
                    },
                    {
                        "_name": "a_m_y_methhead_01",
                        "_caption": "Meth Addict"
                    },
                    {
                        "_name": "a_m_y_mexthug_01",
                        "_caption": "Mexican Thug"
                    },
                    {
                        "_name": "a_m_y_motox_01",
                        "_caption": "Motocross Biker"
                    },
                    {
                        "_name": "a_m_y_motox_02",
                        "_caption": "Motocross Biker 2"
                    },
                    {
                        "_name": "a_m_y_musclbeac_01",
                        "_caption": "Beach Muscle Male"
                    },
                    {
                        "_name": "a_m_y_musclbeac_02",
                        "_caption": "Beach Muscle Male 2"
                    },
                    {
                        "_name": "a_m_y_polynesian_01",
                        "_caption": "Polynesian Young"
                    },
                    {
                        "_name": "a_m_y_roadcyc_01",
                        "_caption": "Road Cyclist"
                    },
                    {
                        "_name": "a_m_y_runner_01",
                        "_caption": "Jogger Male"
                    },
                    {
                        "_name": "a_m_y_runner_02",
                        "_caption": "Jogger Male 2"
                    },
                    {
                        "_name": "a_m_y_salton_01",
                        "_caption": "Salton Young Male"
                    },
                    {
                        "_name": "a_m_y_skater_01",
                        "_caption": "Skater Young Male"
                    },
                    {
                        "_name": "a_m_y_skater_02",
                        "_caption": "Skater Young Male 2"
                    },
                    {
                        "_name": "a_m_y_smartcaspat_01",
                        "_caption": "Formal Casino Guests"
                    },
                    {
                        "_name": "a_m_y_soucent_01",
                        "_caption": "South Central Young Male"
                    },
                    {
                        "_name": "a_m_y_soucent_02",
                        "_caption": "South Central Young Male 2"
                    },
                    {
                        "_name": "a_m_y_soucent_03",
                        "_caption": "South Central Young Male 3"
                    },
                    {
                        "_name": "a_m_y_soucent_04",
                        "_caption": "South Central Young Male 4"
                    },
                    {
                        "_name": "a_m_y_stbla_01",
                        "_caption": "Black Street Male"
                    },
                    {
                        "_name": "a_m_y_stbla_02",
                        "_caption": "Black Street Male 2"
                    },
                    {
                        "_name": "a_m_y_stlat_01",
                        "_caption": "Latino Street Young Male"
                    },
                    {
                        "_name": "a_m_y_studioparty_01",
                        "_caption": "Studio Party Male 2"
                    },
                    {
                        "_name": "a_m_y_stwhi_01",
                        "_caption": "White Street Male"
                    },
                    {
                        "_name": "a_m_y_stwhi_02",
                        "_caption": "White Street Male 2"
                    },
                    {
                        "_name": "a_m_y_sunbathe_01",
                        "_caption": "Sunbather Male"
                    },
                    {
                        "_name": "a_m_y_surfer_01",
                        "_caption": "Surfer"
                    },
                    {
                        "_name": "a_m_y_tattoocust_01",
                        "_caption": "Tattoo Cust Male"
                    },
                    {
                        "_name": "a_m_y_vindouche_01",
                        "_caption": "Vinewood Douche"
                    },
                    {
                        "_name": "a_m_y_vinewood_01",
                        "_caption": "Vinewood Male"
                    },
                    {
                        "_name": "a_m_y_vinewood_02",
                        "_caption": "Vinewood Male 2"
                    },
                    {
                        "_name": "a_m_y_vinewood_03",
                        "_caption": "Vinewood Male 3"
                    },
                    {
                        "_name": "a_m_y_vinewood_04",
                        "_caption": "Vinewood Male 4"
                    },
                    {
                        "_name": "a_m_y_yoga_01",
                        "_caption": "Yoga Male"
                    },
                    {
                        "_name": "a_m_o_beach_02",
                        "_caption": "Beach Old Male 2"
                    },
                    {
                        "_name": "a_m_y_beach_04",
                        "_caption": "Beach Young Male 4"
                    },
                    {
                        "_name": "a_m_y_clubcust_04",
                        "_caption": "Club Customer Male 4"
                    }
                ],
                "_name": "AmbientMale"
            },
            {
                "Ped": [
                    {
                        "_name": "cs_amandatownley",
                        "_caption": "Amanda De Santa"
                    },
                    {
                        "_name": "cs_andreas",
                        "_caption": "Andreas Sanchez"
                    },
                    {
                        "_name": "cs_ashley",
                        "_caption": "Ashley Butler"
                    },
                    {
                        "_name": "cs_bankman",
                        "_caption": "Bank Manager"
                    },
                    {
                        "_name": "cs_barry",
                        "_caption": "Barry"
                    },
                    {
                        "_name": "cs_beverly",
                        "_caption": "Beverly Felton"
                    },
                    {
                        "_name": "cs_brad",
                        "_caption": "Brad"
                    },
                    {
                        "_name": "cs_bradcadaver",
                        "_caption": "Brad's Cadaver"
                    },
                    {
                        "_name": "cs_carbuyer",
                        "_caption": "Car Buyer"
                    },
                    {
                        "_name": "cs_casey",
                        "_caption": "Casey"
                    },
                    {
                        "_name": "cs_chengsr",
                        "_caption": "Wei Cheng Sr"
                    },
                    {
                        "_name": "cs_chrisformage",
                        "_caption": "Cris Formage"
                    },
                    {
                        "_name": "cs_clay",
                        "_caption": "Clay Simons (The Lost)"
                    },
                    {
                        "_name": "cs_dale",
                        "_caption": "Dale"
                    },
                    {
                        "_name": "cs_davenorton",
                        "_caption": "Dave Norton"
                    },
                    {
                        "_name": "cs_debra",
                        "_caption": "Debra"
                    },
                    {
                        "_name": "cs_denise",
                        "_caption": "Denise"
                    },
                    {
                        "_name": "cs_devin",
                        "_caption": "Devin"
                    },
                    {
                        "_name": "cs_dom",
                        "_caption": "Dom Beasley"
                    },
                    {
                        "_name": "cs_dreyfuss",
                        "_caption": "Peter Dreyfuss"
                    },
                    {
                        "_name": "cs_drfriedlander",
                        "_caption": "Dr. Friedlander"
                    },
                    {
                        "_name": "cs_drfriedlander_02",
                        "_caption": "Dr. Friedlander 2"
                    },
                    {
                        "_name": "cs_fabien",
                        "_caption": "Fabien"
                    },
                    {
                        "_name": "cs_fbisuit_01",
                        "_caption": "FIB Suit"
                    },
                    {
                        "_name": "cs_floyd",
                        "_caption": "Floyd Hebert"
                    },
                    {
                        "_name": "cs_guadalope",
                        "_caption": "Guadalope"
                    },
                    {
                        "_name": "cs_gurk",
                        "_caption": "GURK?"
                    },
                    {
                        "_name": "cs_hunter",
                        "_caption": "Hunter"
                    },
                    {
                        "_name": "cs_janet",
                        "_caption": "Janet"
                    },
                    {
                        "_name": "cs_jewelass",
                        "_caption": "Jeweller Assistant"
                    },
                    {
                        "_name": "cs_jimmyboston",
                        "_caption": "Jimmy Boston"
                    },
                    {
                        "_name": "cs_jimmydisanto",
                        "_caption": "Jimmy De Santa"
                    },
                    {
                        "_name": "cs_jimmydisanto2",
                        "_caption": "Jimmy De Santa 2"
                    },
                    {
                        "_name": "cs_joeminuteman",
                        "_caption": "Minuteman Joe"
                    },
                    {
                        "_name": "cs_johnnyklebitz",
                        "_caption": "Johnny Klebitz"
                    },
                    {
                        "_name": "cs_josef",
                        "_caption": "Josef"
                    },
                    {
                        "_name": "cs_josh",
                        "_caption": "Josh"
                    },
                    {
                        "_name": "cs_karen_daniels",
                        "_caption": "Karen Daniels"
                    },
                    {
                        "_name": "cs_lamardavis",
                        "_caption": "Lamar Davis"
                    },
                    {
                        "_name": "cs_lamardavis_02",
                        "_caption": "Lamar Davis 2"
                    },
                    {
                        "_name": "cs_lazlow",
                        "_caption": "Lazlow"
                    },
                    {
                        "_name": "cs_lazlow_2",
                        "_caption": "Lazlow 2"
                    },
                    {
                        "_name": "cs_lestercrest",
                        "_caption": "Lester Crest"
                    },
                    {
                        "_name": "cs_lestercrest_2",
                        "_caption": "Lester Crest 2"
                    },
                    {
                        "_name": "cs_lestercrest_3",
                        "_caption": "Lester Crest 3"
                    },
                    {
                        "_name": "cs_lifeinvad_01",
                        "_caption": "Life Invader"
                    },
                    {
                        "_name": "cs_magenta",
                        "_caption": "Magenta"
                    },
                    {
                        "_name": "cs_manuel",
                        "_caption": "Manuel"
                    },
                    {
                        "_name": "cs_marnie",
                        "_caption": "Marnie Allen"
                    },
                    {
                        "_name": "cs_martinmadrazo",
                        "_caption": "Martin Madrazo"
                    },
                    {
                        "_name": "cs_maryann",
                        "_caption": "Mary-Ann Quinn"
                    },
                    {
                        "_name": "cs_michelle",
                        "_caption": "Michelle"
                    },
                    {
                        "_name": "cs_milton",
                        "_caption": "Milton McIlroy"
                    },
                    {
                        "_name": "cs_molly",
                        "_caption": "Molly"
                    },
                    {
                        "_name": "cs_movpremf_01",
                        "_caption": "Movie Premiere Female"
                    },
                    {
                        "_name": "cs_movpremmale",
                        "_caption": "Movie Premiere Male"
                    },
                    {
                        "_name": "cs_mrk",
                        "_caption": "Ferdinand Kerimov (Mr. K)"
                    },
                    {
                        "_name": "cs_mrs_thornhill",
                        "_caption": "Mrs. Thornhill"
                    },
                    {
                        "_name": "cs_mrsphillips",
                        "_caption": "Mrs. Phillips"
                    },
                    {
                        "_name": "cs_natalia",
                        "_caption": "Natalia"
                    },
                    {
                        "_name": "cs_nervousron",
                        "_caption": "Nervous Ron"
                    },
                    {
                        "_name": "cs_nervousron_02",
                        "_caption": "Nervous Ron 2"
                    },
                    {
                        "_name": "cs_nigel",
                        "_caption": "Nigel"
                    },
                    {
                        "_name": "cs_old_man1a",
                        "_caption": "Old Man 1"
                    },
                    {
                        "_name": "cs_old_man2",
                        "_caption": "Old Man 2"
                    },
                    {
                        "_name": "cs_omega",
                        "_caption": "Omega"
                    },
                    {
                        "_name": "cs_orleans",
                        "_caption": "Bigfoot"
                    },
                    {
                        "_name": "cs_paper",
                        "_caption": "United Paper Man"
                    },
                    {
                        "_name": "cs_patricia",
                        "_caption": "Patricia"
                    },
                    {
                        "_name": "cs_patricia_02",
                        "_caption": "Patricia 2"
                    },
                    {
                        "_name": "cs_priest",
                        "_caption": "Priest"
                    },
                    {
                        "_name": "cs_prolsec_02",
                        "_caption": "Prologue Security 2"
                    },
                    {
                        "_name": "cs_russiandrunk",
                        "_caption": "Russian Drunk"
                    },
                    {
                        "_name": "cs_siemonyetarian",
                        "_caption": "Simeon Yetarian"
                    },
                    {
                        "_name": "cs_solomon",
                        "_caption": "Solomon Richards"
                    },
                    {
                        "_name": "cs_stevehains",
                        "_caption": "Steve Haines"
                    },
                    {
                        "_name": "cs_stretch",
                        "_caption": "Stretch"
                    },
                    {
                        "_name": "cs_tanisha",
                        "_caption": "Tanisha"
                    },
                    {
                        "_name": "cs_taocheng",
                        "_caption": "Tao Cheng"
                    },
                    {
                        "_name": "cs_taocheng2",
                        "_caption": "Tao Cheng (Casino)"
                    },
                    {
                        "_name": "cs_taostranslator",
                        "_caption": "Tao's Translator"
                    },
                    {
                        "_name": "cs_taostranslator2",
                        "_caption": "Tao's Translator 2"
                    },
                    {
                        "_name": "cs_tenniscoach",
                        "_caption": "Tennis Coach"
                    },
                    {
                        "_name": "cs_terry",
                        "_caption": "Terry"
                    },
                    {
                        "_name": "cs_tom",
                        "_caption": "Tom"
                    },
                    {
                        "_name": "cs_tomepsilon",
                        "_caption": "Epsilon Tom"
                    },
                    {
                        "_name": "cs_tracydisanto",
                        "_caption": "Tracey De Santa"
                    },
                    {
                        "_name": "cs_wade",
                        "_caption": "Wade"
                    },
                    {
                        "_name": "cs_zimbor",
                        "_caption": "Zimbor"
                    },
                    {
                        "_name": "csb_abigail",
                        "_caption": "Abigail Mathers"
                    },
                    {
                        "_name": "csb_agatha",
                        "_caption": "Agatha Baker"
                    },
                    {
                        "_name": "csb_agent",
                        "_caption": "Agent"
                    },
                    {
                        "_name": "csb_alan",
                        "_caption": "Alan Jerome"
                    },
                    {
                        "_name": "csb_anita",
                        "_caption": "Anita Mendoza"
                    },
                    {
                        "_name": "csb_anton",
                        "_caption": "Anton Beaudelaire"
                    },
                    {
                        "_name": "csb_ary",
                        "_caption": "Dr Dre"
                    },
                    {
                        "_name": "csb_ary_02",
                        "_caption": "Dr Dre 2"
                    },
                    {
                        "_name": "csb_avery",
                        "_caption": "Avery Duggan"
                    },
                    {
                        "_name": "csb_avischwartzman_02",
                        "_caption": "Avi Schwartzman 2"
                    },
                    {
                        "_name": "csb_avischwartzman_03",
                        "_caption": "Avi Schwartzman 3"
                    },
                    {
                        "_name": "csb_avon",
                        "_caption": "Avon Hertz"
                    },
                    {
                        "_name": "csb_ballas_leader",
                        "_caption": "Ballas Leader"
                    },
                    {
                        "_name": "csb_ballasog",
                        "_caption": "Ballas OG"
                    },
                    {
                        "_name": "csb_billionaire",
                        "_caption": "Billionaire Male"
                    },
                    {
                        "_name": "csb_bogdan",
                        "_caption": "Bogdan"
                    },
                    {
                        "_name": "csb_bride",
                        "_caption": "Bride"
                    },
                    {
                        "_name": "csb_brucie2",
                        "_caption": "Brucie Kibbutz"
                    },
                    {
                        "_name": "csb_bryony",
                        "_caption": "Bryony"
                    },
                    {
                        "_name": "csb_burgerdrug",
                        "_caption": "Burger Shot Drug Worker"
                    },
                    {
                        "_name": "csb_callgirl_01",
                        "_caption": "Call Girl"
                    },
                    {
                        "_name": "csb_car3guy1",
                        "_caption": "Car 3 Guy 1"
                    },
                    {
                        "_name": "csb_car3guy2",
                        "_caption": "Car 3 Guy 2"
                    },
                    {
                        "_name": "csb_celeb_01",
                        "_caption": "Celebrity 1"
                    },
                    {
                        "_name": "csb_charlie_reed",
                        "_caption": "Charlie Reed 2"
                    },
                    {
                        "_name": "csb_chef",
                        "_caption": "Chef"
                    },
                    {
                        "_name": "csb_chef_02",
                        "_caption": "Chef 2"
                    },
                    {
                        "_name": "csb_chef_03",
                        "_caption": "Chef 3"
                    },
                    {
                        "_name": "csb_chin_goon",
                        "_caption": "Chinese Goon"
                    },
                    {
                        "_name": "csb_cletus",
                        "_caption": "Cletus"
                    },
                    {
                        "_name": "csb_cop",
                        "_caption": "Cop"
                    },
                    {
                        "_name": "csb_customer",
                        "_caption": "Customer"
                    },
                    {
                        "_name": "csb_denise_friend",
                        "_caption": "Denise's Friend"
                    },
                    {
                        "_name": "csb_dix",
                        "_caption": "DJ Dixon"
                    },
                    {
                        "_name": "csb_djblamadon",
                        "_caption": "DJ Black Madonna"
                    },
                    {
                        "_name": "csb_drugdealer",
                        "_caption": "Drug Dealer"
                    },
                    {
                        "_name": "csb_englishdave",
                        "_caption": "English Dave"
                    },
                    {
                        "_name": "csb_englishdave2",
                        "_caption": "English Dave 2"
                    },
                    {
                        "_name": "csb_fos_rep",
                        "_caption": "Fame Or Shame Rep"
                    },
                    {
                        "_name": "csb_g",
                        "_caption": "Gerald"
                    },
                    {
                        "_name": "csb_georginacheng",
                        "_caption": "Georgina Cheng"
                    },
                    {
                        "_name": "csb_golfer_a",
                        "_caption": "Golfer"
                    },
                    {
                        "_name": "csb_golfer_b",
                        "_caption": "Golfer 2"
                    },
                    {
                        "_name": "csb_groom",
                        "_caption": "Groom"
                    },
                    {
                        "_name": "csb_grove_str_dlr",
                        "_caption": "Grove Street Dealer"
                    },
                    {
                        "_name": "csb_gustavo",
                        "_caption": "Gustavo"
                    },
                    {
                        "_name": "csb_hao",
                        "_caption": "Hao"
                    },
                    {
                        "_name": "csb_hao_02",
                        "_caption": "Hao 2"
                    },
                    {
                        "_name": "csb_helmsmanpavel ",
                        "_caption": "Helmsman Pavel"
                    },
                    {
                        "_name": "csb_huang",
                        "_caption": "Huang"
                    },
                    {
                        "_name": "csb_hugh",
                        "_caption": "Hugh Welsh"
                    },
                    {
                        "_name": "csb_imani",
                        "_caption": "Imani"
                    },
                    {
                        "_name": "csb_imani",
                        "_caption": "Luchadora"
                    },
                    {
                        "_name": "csb_imran",
                        "_caption": "Imran Shinowa"
                    },
                    {
                        "_name": "csb_isldj_00",
                        "_caption": "Island Dj"
                    },
                    {
                        "_name": "csb_isldj_01",
                        "_caption": "Island Dj 1"
                    },
                    {
                        "_name": "csb_isldj_02",
                        "_caption": "Island Dj 2"
                    },
                    {
                        "_name": "csb_isldj_03",
                        "_caption": "Island Dj 3"
                    },
                    {
                        "_name": "csb_isldj_04",
                        "_caption": "Island Dj 4"
                    },
                    {
                        "_name": "csb_jackhowitzer",
                        "_caption": "Jack Howitzer"
                    },
                    {
                        "_name": "csb_jamalamir",
                        "_caption": "Jamal Amir"
                    },
                    {
                        "_name": "csb_janitor",
                        "_caption": "Janitor"
                    },
                    {
                        "_name": "csb_jio",
                        "_caption": "Jimmy Lovine"
                    },
                    {
                        "_name": "csb_jonnyguns",
                        "_caption": "Jonny Guns"
                    },
                    {
                        "_name": "csb_juanstrickler",
                        "_caption": "El Rubio"
                    },
                    {
                        "_name": "csb_labrat",
                        "_caption": "Labrat"
                    },
                    {
                        "_name": "csb_maude",
                        "_caption": "Maude"
                    },
                    {
                        "_name": "csb_miguelmadrazo",
                        "_caption": "Miguel Madrazo"
                    },
                    {
                        "_name": "csb_mimi",
                        "_caption": "Mimi"
                    },
                    {
                        "_name": "csb_mjo",
                        "_caption": "DJ Pooh"
                    },
                    {
                        "_name": "csb_mjo_02",
                        "_caption": "DJ Pooh 2"
                    },
                    {
                        "_name": "csb_money",
                        "_caption": "Avi Schwartzman"
                    },
                    {
                        "_name": "csb_moodyman_02",
                        "_caption": "Moodyman"
                    },
                    {
                        "_name": "csb_mp_agent14",
                        "_caption": "Agent 14"
                    },
                    {
                        "_name": "csb_mrs_r",
                        "_caption": "Mrs. Rackman"
                    },
                    {
                        "_name": "csb_musician_00",
                        "_caption": "Musician Male"
                    },
                    {
                        "_name": "csb_mweather",
                        "_caption": "Merryweather Merc"
                    },
                    {
                        "_name": "csb_ortega",
                        "_caption": "Ortega"
                    },
                    {
                        "_name": "csb_oscar",
                        "_caption": "Oscar"
                    },
                    {
                        "_name": "csb_paige",
                        "_caption": "Paige Harris"
                    },
                    {
                        "_name": "csb_party_promo",
                        "_caption": "Party Promoter"
                    },
                    {
                        "_name": "csb_popov",
                        "_caption": "Dima Popov"
                    },
                    {
                        "_name": "csb_porndudes",
                        "_caption": "Porn Dude"
                    },
                    {
                        "_name": "csb_prologuedriver",
                        "_caption": "Prologue Driver"
                    },
                    {
                        "_name": "csb_prolsec",
                        "_caption": "Prologue Security"
                    },
                    {
                        "_name": "csb_ramp_gang",
                        "_caption": "Families Gang Member"
                    },
                    {
                        "_name": "csb_ramp_hic",
                        "_caption": "Hick"
                    },
                    {
                        "_name": "csb_ramp_hipster",
                        "_caption": "Hipster"
                    },
                    {
                        "_name": "csb_ramp_marine",
                        "_caption": "Marine"
                    },
                    {
                        "_name": "csb_ramp_mex",
                        "_caption": "Mexican"
                    },
                    {
                        "_name": "csb_rashcosvki",
                        "_caption": "Maxim Rashkovsky"
                    },
                    {
                        "_name": "csb_reporter",
                        "_caption": "Reporter"
                    },
                    {
                        "_name": "csb_req_officer",
                        "_caption": "Charlie Reed"
                    },
                    {
                        "_name": "csb_roccopelosi",
                        "_caption": "Rocco Pelosi"
                    },
                    {
                        "_name": "csb_screen_writer",
                        "_caption": "Screenwriter"
                    },
                    {
                        "_name": "csb_security_a",
                        "_caption": "Security Male"
                    },
                    {
                        "_name": "csb_sessanta",
                        "_caption": "sessanta"
                    },
                    {
                        "_name": "csb_sol",
                        "_caption": "Soloman"
                    },
                    {
                        "_name": "csb_sss",
                        "_caption": "Scott Storch (Cayo Perico)"
                    },
                    {
                        "_name": "csb_stripper_01",
                        "_caption": "Stripper"
                    },
                    {
                        "_name": "csb_stripper_02",
                        "_caption": "Stripper 2"
                    },
                    {
                        "_name": "csb_talcc",
                        "_caption": "Tale of Us 1"
                    },
                    {
                        "_name": "csb_talmm",
                        "_caption": "Tale of Us 2"
                    },
                    {
                        "_name": "csb_thornton",
                        "_caption": "Thornton Duggan"
                    },
                    {
                        "_name": "csb_tomcasino",
                        "_caption": "Tom Connors"
                    },
                    {
                        "_name": "csb_tonya",
                        "_caption": "Tonya"
                    },
                    {
                        "_name": "csb_tonyprince",
                        "_caption": "'Gay' Tony Prince"
                    },
                    {
                        "_name": "csb_trafficwarden",
                        "_caption": "Traffic Warden"
                    },
                    {
                        "_name": "csb_undercover",
                        "_caption": "Undercover Cop"
                    },
                    {
                        "_name": "csb_vagos_leader",
                        "_caption": "Vagos Gang Leader"
                    },
                    {
                        "_name": "csb_vagspeak",
                        "_caption": "Vagos Funeral Speaker"
                    },
                    {
                        "_name": "csb_vincent",
                        "_caption": "Vincent (Casino)"
                    },
                    {
                        "_name": "csb_vincent_2",
                        "_caption": "Vincent"
                    },
                    {
                        "_name": "csb_vincent_4",
                        "_caption": "Vincent 4"
                    },
                    {
                        "_name": "csb_wendy",
                        "_caption": "Wendy"
                    },
                    {
                        "_name": "csb_yusufamir",
                        "_caption": "Yusuf Amir"
                    }
                ],
                "_name": "Cutscene"
            },
            {
                "Ped": [
                    {
                        "_name": "g_f_importexport_01",
                        "_caption": "Gang Female (Import-Export)"
                    },
                    {
                        "_name": "g_f_importexport_01",
                        "_caption": "Import Export Female"
                    },
                    {
                        "_name": "g_f_y_ballas_01",
                        "_caption": "Ballas Female"
                    },
                    {
                        "_name": "g_f_y_families_01",
                        "_caption": "Families Female"
                    },
                    {
                        "_name": "g_f_y_lost_01",
                        "_caption": "The Lost MC Female"
                    },
                    {
                        "_name": "g_f_y_vagos_01",
                        "_caption": "Vagos Female"
                    }
                ],
                "_name": "GangFemale"
            },
            {
                "Ped": [
                    {
                        "_name": "g_m_importexport_01",
                        "_caption": "Gang Male (Import-Export)"
                    },
                    {
                        "_name": "g_m_m_armboss_01",
                        "_caption": "Armenian Boss"
                    },
                    {
                        "_name": "g_m_m_armgoon_01",
                        "_caption": "Armenian Goon"
                    },
                    {
                        "_name": "g_m_m_armlieut_01",
                        "_caption": "Armenian Lieutenant"
                    },
                    {
                        "_name": "g_m_m_casrn_01",
                        "_caption": "Casino Guests?"
                    },
                    {
                        "_name": "g_m_m_chemwork_01",
                        "_caption": "Chemical Plant Worker"
                    },
                    {
                        "_name": "g_m_m_chiboss_01",
                        "_caption": "Chinese Boss"
                    },
                    {
                        "_name": "g_m_m_chicold_01",
                        "_caption": "Chinese Goon Older"
                    },
                    {
                        "_name": "g_m_m_chigoon_01",
                        "_caption": "Chinese Goon"
                    },
                    {
                        "_name": "g_m_m_chigoon_02",
                        "_caption": "Chinese Goon 2"
                    },
                    {
                        "_name": "g_m_m_fooliganz_01",
                        "_caption": "Fooliganz Male"
                    },
                    {
                        "_name": "g_m_m_korboss_01",
                        "_caption": "Korean Boss"
                    },
                    {
                        "_name": "g_m_m_mexboss_01",
                        "_caption": "Mexican Boss"
                    },
                    {
                        "_name": "g_m_m_mexboss_02",
                        "_caption": "Mexican Boss 2"
                    },
                    {
                        "_name": "g_m_m_prisoners_01",
                        "_caption": "Gang Prisoner Male"
                    },
                    {
                        "_name": "g_m_m_slasher_01",
                        "_caption": "Gang Slasher Male"
                    },
                    {
                        "_name": "g_m_y_armgoon_02",
                        "_caption": "Armenian Goon 2"
                    },
                    {
                        "_name": "g_m_y_azteca_01",
                        "_caption": "Azteca"
                    },
                    {
                        "_name": "g_m_y_ballaeast_01",
                        "_caption": "Ballas East Male"
                    },
                    {
                        "_name": "g_m_y_ballaorig_01",
                        "_caption": "Ballas Original Male"
                    },
                    {
                        "_name": "g_m_y_ballasout_01",
                        "_caption": "Ballas South Male"
                    },
                    {
                        "_name": "g_m_y_famca_01",
                        "_caption": "Families CA Male"
                    },
                    {
                        "_name": "g_m_y_famdnf_01",
                        "_caption": "Families DNF Male"
                    },
                    {
                        "_name": "g_m_y_famfor_01",
                        "_caption": "Families FOR Male"
                    },
                    {
                        "_name": "g_m_y_korean_01",
                        "_caption": "Korean Young Male"
                    },
                    {
                        "_name": "g_m_y_korean_02",
                        "_caption": "Korean Young Male 2"
                    },
                    {
                        "_name": "g_m_y_korlieut_01",
                        "_caption": "Korean Lieutenant"
                    },
                    {
                        "_name": "g_m_y_lost_01",
                        "_caption": "The Lost MC Male"
                    },
                    {
                        "_name": "g_m_y_lost_02",
                        "_caption": "The Lost MC Male 2"
                    },
                    {
                        "_name": "g_m_y_lost_03",
                        "_caption": "The Lost MC Male 3"
                    },
                    {
                        "_name": "g_m_y_mexgang_01",
                        "_caption": "Mexican Gang Member"
                    },
                    {
                        "_name": "g_m_y_mexgoon_01",
                        "_caption": "Mexican Goon"
                    },
                    {
                        "_name": "g_m_y_mexgoon_02",
                        "_caption": "Mexican Goon 2"
                    },
                    {
                        "_name": "g_m_y_mexgoon_03",
                        "_caption": "Mexican Goon 3"
                    },
                    {
                        "_name": "g_m_y_pologoon_01",
                        "_caption": "Polynesian Goon"
                    },
                    {
                        "_name": "g_m_y_pologoon_02",
                        "_caption": "Polynesian Goon 2"
                    },
                    {
                        "_name": "g_m_y_salvaboss_01",
                        "_caption": "Salvadoran Boss"
                    },
                    {
                        "_name": "g_m_y_salvagoon_01",
                        "_caption": "Salvadoran Goon"
                    },
                    {
                        "_name": "g_m_y_salvagoon_02",
                        "_caption": "Salvadoran Goon 2"
                    },
                    {
                        "_name": "g_m_y_salvagoon_03",
                        "_caption": "Salvadoran Goon 3"
                    },
                    {
                        "_name": "g_m_y_strpunk_01",
                        "_caption": "Street Punk"
                    },
                    {
                        "_name": "g_m_y_strpunk_02",
                        "_caption": "Street Punk 2"
                    },
                    {
                        "_name": "g_m_m_cartelguards_01",
                        "_caption": "Cartel Guard"
                    },
                    {
                        "_name": "g_m_m_maragrande_01",
                        "_caption": "Mara Grande Gang Male"
                    }
                ],
                "_name": "GangMale"
            },
            {
                "Ped": [
                    {
                        "_name": "ig_abigail",
                        "_caption": "Abigail Mathers"
                    },
                    {
                        "_name": "ig_acidlabcook",
                        "_caption": "Acid Lab Cook"
                    },
                    {
                        "_name": "ig_agatha",
                        "_caption": "Agatha Baker"
                    },
                    {
                        "_name": "ig_agent",
                        "_caption": "Agent Male"
                    },
                    {
                        "_name": "ig_agent_02",
                        "_caption": "Agent Female"
                    },
                    {
                        "_name": "ig_amandatownley",
                        "_caption": "Amanda De Santa"
                    },
                    {
                        "_name": "ig_andreas",
                        "_caption": "Andreas Sanchez"
                    },
                    {
                        "_name": "ig_ary",
                        "_caption": "Dr Dre"
                    },
                    {
                        "_name": "ig_ary_02",
                        "_caption": "Dr Dre"
                    },
                    {
                        "_name": "ig_ashley",
                        "_caption": "Ashley Butler"
                    },
                    {
                        "_name": "ig_avery",
                        "_caption": "Avery Duggan"
                    },
                    {
                        "_name": "ig_avischwartzman_02",
                        "_caption": "Avi Schawrtzman"
                    },
                    {
                        "_name": "ig_avischwartzman_03",
                        "_caption": "Avi Schwartzman 3"
                    },
                    {
                        "_name": "ig_avon",
                        "_caption": "Avon Hertz"
                    },
                    {
                        "_name": "ig_ballas_leader",
                        "_caption": "Ballas Leader"
                    },
                    {
                        "_name": "ig_ballasog",
                        "_caption": "Ballas OG"
                    },
                    {
                        "_name": "ig_bankman",
                        "_caption": "Bank Manager"
                    },
                    {
                        "_name": "ig_barry",
                        "_caption": "Barry"
                    },
                    {
                        "_name": "ig_benny",
                        "_caption": "Benny"
                    },
                    {
                        "_name": "ig_benny_02",
                        "_caption": "Benny (Los Santos Tuners)"
                    },
                    {
                        "_name": "ig_bestmen",
                        "_caption": "Best Man"
                    },
                    {
                        "_name": "ig_beverly",
                        "_caption": "Beverly Felton"
                    },
                    {
                        "_name": "ig_bountytarget_01",
                        "_caption": "Bottom Dollar Bounty 1"
                    },
                    {
                        "_name": "ig_bountytarget_05",
                        "_caption": "Bottom Dollar Bounty 5"
                    },
                    {
                        "_name": "ig_bountytarget_02",
                        "_caption": "Bottom Dollar Bounty 2"
                    },
                    {
                        "_name": "ig_bountytarget_03",
                        "_caption": "Bottom Dollar Bounty 3"
                    },
                    {
                        "_name": "ig_bountytarget_04",
                        "_caption": "Bottom Dollar Bounty 4"
                    },
                    {
                        "_name": "ig_bountytarget_06",
                        "_caption": "Bottom Dollar Bounty 6"
                    },
                    {
                        "_name": "ig_brad",
                        "_caption": "Brad"
                    },
                    {
                        "_name": "ig_bride",
                        "_caption": "Bride"
                    },
                    {
                        "_name": "ig_brucie2",
                        "_caption": "Brucie Kibbutz"
                    },
                    {
                        "_name": "ig_callgirl1",
                        "_caption": "Call Girl"
                    },
                    {
                        "_name": "ig_callgirl2",
                        "_caption": "Call Girl 2"
                    },
                    {
                        "_name": "ig_car3guy1",
                        "_caption": "Car 3 Guy 1"
                    },
                    {
                        "_name": "ig_car3guy2",
                        "_caption": "Car 3 Guy 2"
                    },
                    {
                        "_name": "ig_casey",
                        "_caption": "Casey"
                    },
                    {
                        "_name": "ig_celeb_01",
                        "_caption": "Celeb 1"
                    },
                    {
                        "_name": "ig_chef",
                        "_caption": "Chef"
                    },
                    {
                        "_name": "ig_chef2",
                        "_caption": "Chef 2"
                    },
                    {
                        "_name": "ig_chengsr",
                        "_caption": "Wei Cheng"
                    },
                    {
                        "_name": "ig_chrisformage",
                        "_caption": "Cris Formage"
                    },
                    {
                        "_name": "ig_clay",
                        "_caption": "Clay Simons (The Lost)"
                    },
                    {
                        "_name": "ig_claypain",
                        "_caption": "Clay Jackson (The Pain Giver)"
                    },
                    {
                        "_name": "ig_cletus",
                        "_caption": "Cletus"
                    },
                    {
                        "_name": "ig_dale",
                        "_caption": "Dale"
                    },
                    {
                        "_name": "ig_davenorton",
                        "_caption": "Dave Norton"
                    },
                    {
                        "_name": "ig_dax",
                        "_caption": "Dax"
                    },
                    {
                        "_name": "ig_denise",
                        "_caption": "Denise"
                    },
                    {
                        "_name": "ig_devin",
                        "_caption": "Devin"
                    },
                    {
                        "_name": "ig_dix",
                        "_caption": "Dixon"
                    },
                    {
                        "_name": "ig_djblamadon",
                        "_caption": "DJ Black Madonna"
                    },
                    {
                        "_name": "ig_djblamrupert",
                        "_caption": "DJ Rupert"
                    },
                    {
                        "_name": "ig_djblamryans",
                        "_caption": "DJ Ryan S"
                    },
                    {
                        "_name": "ig_djdixmanager",
                        "_caption": "DJ Dixon Manager"
                    },
                    {
                        "_name": "ig_djgeneric_01",
                        "_caption": "Generic DJ"
                    },
                    {
                        "_name": "ig_djsolfotios",
                        "_caption": "DJ Fotios"
                    },
                    {
                        "_name": "ig_djsoljakob",
                        "_caption": "DJ Jakob"
                    },
                    {
                        "_name": "ig_djsolmanager",
                        "_caption": "Soloman Manager"
                    },
                    {
                        "_name": "ig_djsolmike",
                        "_caption": "DJ Mike T"
                    },
                    {
                        "_name": "ig_djsolrobt",
                        "_caption": "DJ Rob T"
                    },
                    {
                        "_name": "ig_djtalaurelia",
                        "_caption": " DJ Aurelia"
                    },
                    {
                        "_name": "ig_djtalignazio",
                        "_caption": "DJ Ignazio"
                    },
                    {
                        "_name": "ig_dom",
                        "_caption": "Dom Beasley"
                    },
                    {
                        "_name": "ig_dreyfuss",
                        "_caption": "Peter Dreyfuss"
                    },
                    {
                        "_name": "ig_drfriedlander",
                        "_caption": "Dr. Friedlander"
                    },
                    {
                        "_name": "ig_drfriedlander_02",
                        "_caption": "Dr. Friedlander 2"
                    },
                    {
                        "_name": "ig_drugdealer",
                        "_caption": "Drugdealer"
                    },
                    {
                        "_name": "ig_englishdave",
                        "_caption": "English Dave"
                    },
                    {
                        "_name": "ig_entourage_b",
                        "_caption": "Entourage Female 2"
                    },
                    {
                        "_name": "ig_fabien",
                        "_caption": "Fabien"
                    },
                    {
                        "_name": "ig_fbisuit_01",
                        "_caption": "FIB Suit"
                    },
                    {
                        "_name": "ig_floyd",
                        "_caption": "Floyd Hebert"
                    },
                    {
                        "_name": "ig_fooliganz_01",
                        "_caption": "Fooliganz Female"
                    },
                    {
                        "_name": "ig_fooliganz_02",
                        "_caption": "Fooliganz 2 Female"
                    },
                    {
                        "_name": "ig_g",
                        "_caption": "Gerald"
                    },
                    {
                        "_name": "ig_georginacheng",
                        "_caption": "Georgina Cheng"
                    },
                    {
                        "_name": "ig_golfer_a",
                        "_caption": "Golfer Male"
                    },
                    {
                        "_name": "ig_golfer_b",
                        "_caption": "Golfer Male 2"
                    },
                    {
                        "_name": "ig_groom",
                        "_caption": "Groom"
                    },
                    {
                        "_name": "ig_gunvanseller",
                        "_caption": "Gun Van Seller"
                    },
                    {
                        "_name": "ig_hao",
                        "_caption": "Hao"
                    },
                    {
                        "_name": "ig_hao_02",
                        "_caption": "Hao"
                    },
                    {
                        "_name": "ig_huang",
                        "_caption": "Huang"
                    },
                    {
                        "_name": "ig_hunter",
                        "_caption": "Hunter"
                    },
                    {
                        "_name": "ig_imani",
                        "_caption": "Imani"
                    },
                    {
                        "_name": "ig_jamalamir",
                        "_caption": "Jamal Amir"
                    },
                    {
                        "_name": "ig_janet",
                        "_caption": "Janet"
                    },
                    {
                        "_name": "ig_jay_norris",
                        "_caption": "Jay Norris"
                    },
                    {
                        "_name": "ig_jenetteE",
                        "_caption": "Jenette"
                    },
                    {
                        "_name": "ig_jewelass",
                        "_caption": "Jeweller Assistant"
                    },
                    {
                        "_name": "ig_jimmyboston",
                        "_caption": "Jimmy Boston"
                    },
                    {
                        "_name": "ig_jimmyboston_02",
                        "_caption": "Jimmy Boston 2"
                    },
                    {
                        "_name": "ig_jimmydisanto",
                        "_caption": "Jimmy De Santa"
                    },
                    {
                        "_name": "ig_jimmydisanto2",
                        "_caption": "Jimmy De Santa 2"
                    },
                    {
                        "_name": "ig_jio_02",
                        "_caption": "Jimmy Lovine"
                    },
                    {
                        "_name": "ig_joeminuteman",
                        "_caption": "Minuteman Joe"
                    },
                    {
                        "_name": "ig_johnnyklebitz",
                        "_caption": "Johnny Klebitz"
                    },
                    {
                        "_name": "ig_jonny_guns",
                        "_caption": "Johnny Guns"
                    },
                    {
                        "_name": "ig_josef",
                        "_caption": "Josef"
                    },
                    {
                        "_name": "ig_josh",
                        "_caption": "Josh"
                    },
                    {
                        "_name": "ig_karen_daniels",
                        "_caption": "Karen Daniels"
                    },
                    {
                        "_name": "ig_kerrymcintosh",
                        "_caption": "Kerry McIntosh"
                    },
                    {
                        "_name": "ig_kerrymcintosh_02",
                        "_caption": "Kerry McIntosh 2"
                    },
                    {
                        "_name": "ig_labrat",
                        "_caption": "Labrat"
                    },
                    {
                        "_name": "ig_lacey_jones_02",
                        "_caption": "Lacy Jones 2"
                    },
                    {
                        "_name": "ig_lamardavis",
                        "_caption": "Lamar Davis"
                    },
                    {
                        "_name": "ig_lazlow",
                        "_caption": "Lazlow"
                    },
                    {
                        "_name": "ig_lazlow_2",
                        "_caption": "Lazlow 2"
                    },
                    {
                        "_name": "ig_lestercrest",
                        "_caption": "Lester Crest"
                    },
                    {
                        "_name": "ig_lestercrest_2",
                        "_caption": "Lester Crest 2"
                    },
                    {
                        "_name": "ig_lestercrest_3",
                        "_caption": "Lester Crest 3"
                    },
                    {
                        "_name": "ig_lifeinvad_01",
                        "_caption": "Life Invader"
                    },
                    {
                        "_name": "ig_lifeinvad_02",
                        "_caption": "Life Invader 2"
                    },
                    {
                        "_name": "ig_lildee",
                        "_caption": "Lil Dee"
                    },
                    {
                        "_name": "ig_magenta",
                        "_caption": "Magenta"
                    },
                    {
                        "_name": "ig_manuel",
                        "_caption": "Manuel"
                    },
                    {
                        "_name": "ig_marnie",
                        "_caption": "Marnie Allen"
                    },
                    {
                        "_name": "ig_maryann",
                        "_caption": "Mary-Ann Quinn"
                    },
                    {
                        "_name": "ig_maude",
                        "_caption": "Maude"
                    },
                    {
                        "_name": "ig_maudebf",
                        "_caption": "Murph"
                    },
                    {
                        "_name": "ig_mechanic_01",
                        "_caption": "Mechanic Male (Red's Auto Parts)"
                    },
                    {
                        "_name": "ig_mechanic_02",
                        "_caption": "Mechanic Female (Red's Auto Parts)"
                    },
                    {
                        "_name": "ig_michelle",
                        "_caption": "Michelle"
                    },
                    {
                        "_name": "ig_milton",
                        "_caption": "Milton McIlroy"
                    },
                    {
                        "_name": "ig_mimi",
                        "_caption": "Mimi"
                    },
                    {
                        "_name": "ig_molly",
                        "_caption": "Molly"
                    },
                    {
                        "_name": "ig_money",
                        "_caption": "Avi Schawrtzman"
                    },
                    {
                        "_name": "ig_moodyman_02",
                        "_caption": "Moodyman"
                    },
                    {
                        "_name": "ig_mp_agent14",
                        "_caption": "Agent 14"
                    },
                    {
                        "_name": "ig_mrk",
                        "_caption": "Ferdinand Kerimov (Mr. K)"
                    },
                    {
                        "_name": "ig_mrs_thornhill",
                        "_caption": "Mrs. Thornhill"
                    },
                    {
                        "_name": "ig_mrsphillips",
                        "_caption": "Mrs. Phillips"
                    },
                    {
                        "_name": "ig_natalia",
                        "_caption": "Natalia"
                    },
                    {
                        "_name": "ig_nervousron",
                        "_caption": "Nervous Ron"
                    },
                    {
                        "_name": "ig_nigel",
                        "_caption": "Nigel"
                    },
                    {
                        "_name": "ig_old_man1a",
                        "_caption": "Old Man 1"
                    },
                    {
                        "_name": "ig_old_man2",
                        "_caption": "Old Man 2"
                    },
                    {
                        "_name": "ig_omega",
                        "_caption": "Omega"
                    },
                    {
                        "_name": "ig_oneil",
                        "_caption": "O'Neil Brothers"
                    },
                    {
                        "_name": "ig_orleans",
                        "_caption": "Bigfoot / Sasquash"
                    },
                    {
                        "_name": "ig_ortega",
                        "_caption": "Ortega"
                    },
                    {
                        "_name": "ig_paige",
                        "_caption": "Paige Harris"
                    },
                    {
                        "_name": "ig_paper",
                        "_caption": "United Paper Man"
                    },
                    {
                        "_name": "ig_patricia",
                        "_caption": "Patricia"
                    },
                    {
                        "_name": "ig_patricia_02",
                        "_caption": "Patricia 2"
                    },
                    {
                        "_name": "ig_pilot_02",
                        "_caption": "Pilot 2"
                    },
                    {
                        "_name": "ig_popov",
                        "_caption": "Dima Popov"
                    },
                    {
                        "_name": "ig_priest",
                        "_caption": "Priest"
                    },
                    {
                        "_name": "ig_prolsec_02",
                        "_caption": "Prologue Security 2"
                    },
                    {
                        "_name": "ig_ramp_gang",
                        "_caption": "Families Gang Member?"
                    },
                    {
                        "_name": "ig_ramp_hic",
                        "_caption": "Hick"
                    },
                    {
                        "_name": "ig_ramp_hipster",
                        "_caption": "Hipster"
                    },
                    {
                        "_name": "ig_ramp_mex",
                        "_caption": "Mexican"
                    },
                    {
                        "_name": "ig_rashcosvki",
                        "_caption": "Maxim Rashkovsky"
                    },
                    {
                        "_name": "ig_req_officer",
                        "_caption": "Charlie Reed"
                    },
                    {
                        "_name": "ig_roccopelosi",
                        "_caption": "Rocco Pelosi"
                    },
                    {
                        "_name": "ig_roostermcraw",
                        "_caption": "Rooster McCraw"
                    },
                    {
                        "_name": "ig_russiandrunk",
                        "_caption": "Russian Drunk"
                    },
                    {
                        "_name": "ig_sacha",
                        "_caption": "Sacha Yetarian"
                    },
                    {
                        "_name": "ig_screen_writer",
                        "_caption": "Screenwriter"
                    },
                    {
                        "_name": "ig_security_a",
                        "_caption": "Security Male"
                    },
                    {
                        "_name": "ig_sessanta",
                        "_caption": "Sessanta"
                    },
                    {
                        "_name": "ig_siemonyetarian",
                        "_caption": "Simeon Yetarian"
                    },
                    {
                        "_name": "ig_sol",
                        "_caption": "Soloman"
                    },
                    {
                        "_name": "ig_solomon",
                        "_caption": "Solomon Richards"
                    },
                    {
                        "_name": "ig_soundeng",
                        "_caption": "Sound Engineer Female"
                    },
                    {
                        "_name": "ig_stevehains",
                        "_caption": "Steve Haines"
                    },
                    {
                        "_name": "ig_stretch",
                        "_caption": "Stretch"
                    },
                    {
                        "_name": "ig_subscrewhead",
                        "_caption": "Sub Crew Head"
                    },
                    {
                        "_name": "ig_talcc",
                        "_caption": "Tale of Us 1"
                    },
                    {
                        "_name": "ig_talina",
                        "_caption": "Talina"
                    },
                    {
                        "_name": "ig_talmm",
                        "_caption": "Tale of Us 2"
                    },
                    {
                        "_name": "ig_tanisha",
                        "_caption": "Tanisha"
                    },
                    {
                        "_name": "ig_taocheng",
                        "_caption": "Tao Cheng"
                    },
                    {
                        "_name": "ig_taocheng2",
                        "_caption": "Tao Cheng (Casino)"
                    },
                    {
                        "_name": "ig_taostranslator",
                        "_caption": "Tao's Translator"
                    },
                    {
                        "_name": "ig_taostranslator2",
                        "_caption": "Tao's Translator (Casino)"
                    },
                    {
                        "_name": "ig_tenniscoach",
                        "_caption": "Tennis Coach"
                    },
                    {
                        "_name": "ig_terry",
                        "_caption": "Terry"
                    },
                    {
                        "_name": "ig_thornton",
                        "_caption": "Thornton Duggan"
                    },
                    {
                        "_name": "ig_tomcasino",
                        "_caption": "Tom Connors"
                    },
                    {
                        "_name": "ig_tomepsilon",
                        "_caption": "Epsilon Tom"
                    },
                    {
                        "_name": "ig_tonya",
                        "_caption": "Tonya"
                    },
                    {
                        "_name": "ig_tonyprince",
                        "_caption": "Tony Prince"
                    },
                    {
                        "_name": "ig_tracydisanto",
                        "_caption": "Tracey De Santa"
                    },
                    {
                        "_name": "ig_trafficwarden",
                        "_caption": "Traffic Warden"
                    },
                    {
                        "_name": "ig_tylerdix",
                        "_caption": "Tyler Dixon"
                    },
                    {
                        "_name": "ig_tylerdix_02",
                        "_caption": "Tyler Dixon 2"
                    },
                    {
                        "_name": "ig_vagos_leader",
                        "_caption": "Vagos Gang Leader"
                    },
                    {
                        "_name": "ig_vagspeak",
                        "_caption": "Vagos Funeral Speaker"
                    },
                    {
                        "_name": "ig_vernon",
                        "_caption": "Vernon"
                    },
                    {
                        "_name": "ig_vincent",
                        "_caption": "Vincent"
                    },
                    {
                        "_name": "ig_vincent_2",
                        "_caption": "Vincent 2"
                    },
                    {
                        "_name": "ig_vincent_3",
                        "_caption": "Vincent 3"
                    },
                    {
                        "_name": "ig_vincent_4",
                        "_caption": "Vincent 4"
                    },
                    {
                        "_name": "ig_wade",
                        "_caption": "Wade"
                    },
                    {
                        "_name": "ig_wendy",
                        "_caption": "Wendy"
                    },
                    {
                        "_name": "ig_yusufamir",
                        "_caption": "DJ Blam Ryan H"
                    },
                    {
                        "_name": "ig_yusufamir",
                        "_caption": "Pernell Moss"
                    },
                    {
                        "_name": "ig_yusufamir",
                        "_caption": "Yusuf Amir"
                    },
                    {
                        "_name": "ig_zimbor",
                        "_caption": "Zimbor"
                    },
                    {
                        "_name": "ig_malc",
                        "_caption": "Malc"
                    },
                    {
                        "_name": "ig_englishdave_02",
                        "_caption": "English Dave 2"
                    },
                    {
                        "_name": "ig_gustavo",
                        "_caption": "Gustavo"
                    },
                    {
                        "_name": "ig_helmsmanpavel",
                        "_caption": "Helmsman Pavel"
                    },
                    {
                        "_name": "ig_isldj_00",
                        "_caption": "Island Dj"
                    },
                    {
                        "_name": "ig_isldj_01",
                        "_caption": "Island Dj 1"
                    },
                    {
                        "_name": "ig_isldj_02",
                        "_caption": "Island Dj 2"
                    },
                    {
                        "_name": "ig_isldj_03",
                        "_caption": "Island Dj 3"
                    },
                    {
                        "_name": "ig_isldj_04",
                        "_caption": "Island Dj 4"
                    },
                    {
                        "_name": "ig_isldj_04_D_01",
                        "_caption": "Island Dj 4D"
                    },
                    {
                        "_name": "ig_isldj_04_D_02",
                        "_caption": "Island Dj 4D2"
                    },
                    {
                        "_name": "ig_isldj_04_E_01",
                        "_caption": "Island Dj 4E"
                    },
                    {
                        "_name": "ig_jackie",
                        "_caption": "Jackie"
                    },
                    {
                        "_name": "ig_jio",
                        "_caption": "Jimmy Lovine"
                    },
                    {
                        "_name": "ig_juanstrickler",
                        "_caption": "Juan Strickler"
                    },
                    {
                        "_name": "ig_kaylee",
                        "_caption": "Kaylee"
                    },
                    {
                        "_name": "ig_miguelmadrazo",
                        "_caption": "Miguel Madrazo"
                    },
                    {
                        "_name": "ig_mjo",
                        "_caption": "DJ Pooh"
                    },
                    {
                        "_name": "ig_oldrichguy",
                        "_caption": "Old Rich Guy"
                    },
                    {
                        "_name": "ig_patricia_02",
                        "_caption": "Patricia 2"
                    },
                    {
                        "_name": "ig_pilot",
                        "_caption": "Pilot"
                    },
                    {
                        "_name": "ig_sss",
                        "_caption": "Scott Storch"
                    },
                    {
                        "_name": "ig_warehouseboss",
                        "_caption": "Lupe"
                    },
                    {
                        "_name": "ig_mason_duggan",
                        "_caption": "Mason Duggan"
                    }
                ],
                "_name": "Story"
            },
            {
                "Ped": [
                    {
                        "_name": "mp_f_bennymech_01",
                        "_caption": "Benny Mechanic (Female)"
                    },
                    {
                        "_name": "mp_f_boatstaff_01",
                        "_caption": "Boat-Staff Female"
                    },
                    {
                        "_name": "mp_f_cardesign_01",
                        "_caption": "Office Garage Mechanic (Female)"
                    },
                    {
                        "_name": "mp_f_chbar_01",
                        "_caption": "Clubhouse Bar Female"
                    },
                    {
                        "_name": "mp_f_cocaine_01",
                        "_caption": "Biker Cocaine Female"
                    },
                    {
                        "_name": "mp_f_counterfeit_01",
                        "_caption": "Biker Counterfeit Female"
                    },
                    {
                        "_name": "mp_f_deadhooker",
                        "_caption": "Dead Hooker"
                    },
                    {
                        "_name": "mp_f_execpa_01",
                        "_caption": "Executive PA Female"
                    },
                    {
                        "_name": "mp_f_execpa_02",
                        "_caption": "Executive PA Female 2"
                    },
                    {
                        "_name": "mp_f_forgery_01",
                        "_caption": "Biker Forgery Female"
                    },
                    {
                        "_name": "mp_f_helistaff_01",
                        "_caption": "Heli-Staff Female"
                    },
                    {
                        "_name": "mp_f_meth_01",
                        "_caption": "Biker Meth Female"
                    },
                    {
                        "_name": "mp_f_misty_01",
                        "_caption": "Misty"
                    },
                    {
                        "_name": "mp_f_stripperlite",
                        "_caption": "Stripper Lite (Female)"
                    },
                    {
                        "_name": "mp_f_weed_01",
                        "_caption": "Biker Weed Female"
                    },
                    {
                        "_name": "mp_g_m_pros_01",
                        "_caption": "Pros"
                    },
                    {
                        "_name": "mp_m_avongoon",
                        "_caption": "Avon Goon"
                    },
                    {
                        "_name": "mp_m_boatstaff_01",
                        "_caption": "Boat-Staff Male"
                    },
                    {
                        "_name": "mp_m_bogdangoon",
                        "_caption": "Bogdan Goon"
                    },
                    {
                        "_name": "mp_m_claude_01",
                        "_caption": "Claude Speed"
                    },
                    {
                        "_name": "mp_m_cocaine_01",
                        "_caption": "Biker Cocaine Male"
                    },
                    {
                        "_name": "mp_m_counterfeit_01",
                        "_caption": "Biker Counterfeit Male"
                    },
                    {
                        "_name": "mp_m_exarmy_01",
                        "_caption": "Ex-Army Male"
                    },
                    {
                        "_name": "mp_m_execpa_01",
                        "_caption": "Executive PA Male"
                    },
                    {
                        "_name": "mp_m_famdd_01",
                        "_caption": "Families DD Male"
                    },
                    {
                        "_name": "mp_m_fibsec_01",
                        "_caption": "FIB Security"
                    },
                    {
                        "_name": "mp_m_forgery_01",
                        "_caption": "Biker Forgery Male"
                    },
                    {
                        "_name": "mp_m_g_vagfun_01",
                        "_caption": "Vagos Funeral"
                    },
                    {
                        "_name": "mp_m_marston_01",
                        "_caption": "John Marston"
                    },
                    {
                        "_name": "ig_mechanic_03",
                        "_caption": "Vinewood Car Club Mechanic"
                    },
                    {
                        "_name": "mp_m_meth_01",
                        "_caption": "Biker Meth Male"
                    },
                    {
                        "_name": "mp_m_niko_01",
                        "_caption": "Niko Bellic"
                    },
                    {
                        "_name": "mp_m_securoguard_01",
                        "_caption": "Securoserve Guard (Male)"
                    },
                    {
                        "_name": "mp_m_shopkeep_01",
                        "_caption": "Shopkeeper (Male)"
                    },
                    {
                        "_name": "mp_m_waremech_01",
                        "_caption": "Warehouse Mechanic (Male)"
                    },
                    {
                        "_name": "mp_m_weed_01",
                        "_caption": "Biker Weed Male"
                    },
                    {
                        "_name": "mp_s_m_armoured_01",
                        "_caption": "Armoured Van Security Male"
                    },
                    {
                        "_name": "mp_m_weapexp_01",
                        "_caption": "Weapon Exp (Male)"
                    },
                    {
                        "_name": "mp_m_weapwork_01",
                        "_caption": "Weapon Work (Male)"
                    }
                ],
                "_name": "Multiplayer"
            },
            {
                "Ped": [
                    {
                        "_name": "s_f_m_autoshop_01",
                        "_caption": "Autoshop Worker Female"
                    },
                    {
                        "_name": "s_f_m_fembarber",
                        "_caption": "Barber Female"
                    },
                    {
                        "_name": "s_f_m_maid_01",
                        "_caption": "Maid"
                    },
                    {
                        "_name": "s_f_m_retailstaff_01",
                        "_caption": "Retailstaff"
                    },
                    {
                        "_name": "s_f_m_shop_high",
                        "_caption": "Sales Assistant (High-End)"
                    },
                    {
                        "_name": "s_f_m_studioassist_01",
                        "_caption": "Studio Assistant"
                    },
                    {
                        "_name": "s_f_m_sweatshop_01",
                        "_caption": "Sweatshop Worker"
                    },
                    {
                        "_name": "s_f_m_warehouse_01",
                        "_caption": "Warehouse Employee Female"
                    },
                    {
                        "_name": "s_f_y_airhostess_01",
                        "_caption": "Air Hostess"
                    },
                    {
                        "_name": "s_f_y_bartender_01",
                        "_caption": "Bartender"
                    },
                    {
                        "_name": "s_f_y_baywatch_01",
                        "_caption": "Baywatch Female"
                    },
                    {
                        "_name": "s_f_y_casino_01",
                        "_caption": "Casino Staff"
                    },
                    {
                        "_name": "s_f_y_clubbar_01",
                        "_caption": "Club Bartender Female"
                    },
                    {
                        "_name": "s_f_y_cop_01",
                        "_caption": "Cop Female"
                    },
                    {
                        "_name": "s_f_y_factory_01",
                        "_caption": "Factory Worker Female"
                    },
                    {
                        "_name": "s_f_y_hooker_01",
                        "_caption": "Hooker"
                    },
                    {
                        "_name": "s_f_y_hooker_02",
                        "_caption": "Hooker 2"
                    },
                    {
                        "_name": "s_f_y_hooker_03",
                        "_caption": "Hooker 3"
                    },
                    {
                        "_name": "s_f_y_migrant_01",
                        "_caption": "Migrant Female"
                    },
                    {
                        "_name": "s_f_y_movprem_01",
                        "_caption": "Movie Premiere Female"
                    },
                    {
                        "_name": "s_f_y_ranger_01",
                        "_caption": "Park Ranger Female"
                    },
                    {
                        "_name": "s_f_y_scrubs_01",
                        "_caption": "Hospital Scrubs Female"
                    },
                    {
                        "_name": "s_f_y_sheriff_01",
                        "_caption": "Sheriff Female"
                    },
                    {
                        "_name": "s_f_y_shop_low",
                        "_caption": "Sales Assistant (Low-End)"
                    },
                    {
                        "_name": "s_f_y_shop_mid",
                        "_caption": "Sales Assistant (Mid-Price)"
                    },
                    {
                        "_name": "s_f_y_stripper_01",
                        "_caption": "Stripper"
                    },
                    {
                        "_name": "s_f_y_stripper_02",
                        "_caption": "Stripper 2"
                    },
                    {
                        "_name": "s_f_y_stripperlite",
                        "_caption": "Stripper Lite"
                    },
                    {
                        "_name": "s_f_y_sweatshop_01",
                        "_caption": "Sweatshop Worker Young"
                    },
                    {
                        "_name": "s_f_y_beachbarstaff_01",
                        "_caption": "Beach Bar Staff"
                    },
                    {
                        "_name": "s_f_y_clubbar_02",
                        "_caption": "Club Bartender Female 2"
                    }
                ],
                "_name": "ScenarioFemale"
            },
            {
                "Ped": [
                    {
                        "_name": "s_m_m_Autoshop_03",
                        "_caption": "Autoshop Worker 3"
                    },
                    {
                        "_name": "s_m_m_ammucountry",
                        "_caption": "Ammu-Nation Rural Clerk"
                    },
                    {
                        "_name": "s_m_m_armoured_01",
                        "_caption": "Armoured Van Security"
                    },
                    {
                        "_name": "s_m_m_armoured_02",
                        "_caption": "Armoured Van Security 2"
                    },
                    {
                        "_name": "s_m_m_autoshop_01",
                        "_caption": "Autoshop Worker"
                    },
                    {
                        "_name": "s_m_m_autoshop_02",
                        "_caption": "Autoshop Worker 2"
                    },
                    {
                        "_name": "s_m_m_bailoffice_01",
                        "_caption": "Bail Office Worker"
                    },
                    {
                        "_name": "s_m_m_bouncer_01",
                        "_caption": "Bouncer"
                    },
                    {
                        "_name": "s_m_m_ccrew_01",
                        "_caption": "Crew Member"
                    },
                    {
                        "_name": "s_m_m_ccrew_02",
                        "_caption": "Crew Member 2"
                    },
                    {
                        "_name": "s_m_m_ccrew_03",
                        "_caption": "Crew Member 3"
                    },
                    {
                        "_name": "s_m_m_chemsec_01",
                        "_caption": "Chemical Plant Security"
                    },
                    {
                        "_name": "s_m_m_ciasec_01",
                        "_caption": "IAA Security"
                    },
                    {
                        "_name": "s_m_m_cntrybar_01",
                        "_caption": "Bartender (Rural)"
                    },
                    {
                        "_name": "s_m_m_cop_01",
                        "_caption": "Cop Male 2"
                    },
                    {
                        "_name": "s_m_m_dockwork_01",
                        "_caption": "Dock Worker"
                    },
                    {
                        "_name": "s_m_m_doctor_01",
                        "_caption": "Doctor"
                    },
                    {
                        "_name": "s_m_m_fiboffice_01",
                        "_caption": "FIB Office Worker"
                    },
                    {
                        "_name": "s_m_m_fiboffice_02",
                        "_caption": "FIB Office Worker 2"
                    },
                    {
                        "_name": "s_m_m_fibsec_01",
                        "_caption": "FIB Security"
                    },
                    {
                        "_name": "s_m_m_gaffer_01",
                        "_caption": "Gaffer"
                    },
                    {
                        "_name": "s_m_m_gardener_01",
                        "_caption": "Gardener"
                    },
                    {
                        "_name": "s_m_m_gentransport",
                        "_caption": "Transport Worker Male"
                    },
                    {
                        "_name": "s_m_m_hairdress_01",
                        "_caption": "Hairdresser Male"
                    },
                    {
                        "_name": "s_m_m_hazmatworker_01",
                        "_caption": "Hazmat Worker Male"
                    },
                    {
                        "_name": "s_m_m_highsec_01",
                        "_caption": "High Security"
                    },
                    {
                        "_name": "s_m_m_highsec_02",
                        "_caption": "High Security 2"
                    },
                    {
                        "_name": "s_m_m_highsec_03",
                        "_caption": "High Security 3"
                    },
                    {
                        "_name": "s_m_m_highsec_05",
                        "_caption": "High Security 5"
                    },
                    {
                        "_name": "s_m_m_janitor",
                        "_caption": "Janitor"
                    },
                    {
                        "_name": "s_m_m_lathandy_01",
                        "_caption": "Latino Handyman Male"
                    },
                    {
                        "_name": "s_m_m_lifeinvad_01",
                        "_caption": "Life Invader Male"
                    },
                    {
                        "_name": "s_m_m_linecook",
                        "_caption": "Line Cook"
                    },
                    {
                        "_name": "s_m_m_lsmetro_01",
                        "_caption": "LS Metro Worker Male"
                    },
                    {
                        "_name": "s_m_m_mariachi_01",
                        "_caption": "Mariachi"
                    },
                    {
                        "_name": "s_m_m_marine_01",
                        "_caption": "Marine"
                    },
                    {
                        "_name": "s_m_m_marine_02",
                        "_caption": "Marine 2"
                    },
                    {
                        "_name": "s_m_m_migrant_01",
                        "_caption": "Migrant Male"
                    },
                    {
                        "_name": "s_m_m_movalien_01",
                        "_caption": "Alien"
                    },
                    {
                        "_name": "s_m_m_movprem_01",
                        "_caption": "Movie Premiere Male"
                    },
                    {
                        "_name": "s_m_m_movspace_01",
                        "_caption": "Movie Astronaut"
                    },
                    {
                        "_name": "s_m_m_paramedic_01",
                        "_caption": "Paramedic"
                    },
                    {
                        "_name": "s_m_m_pilot_01",
                        "_caption": "Pilot"
                    },
                    {
                        "_name": "s_m_m_pilot_02",
                        "_caption": "Pilot 2"
                    },
                    {
                        "_name": "s_m_m_postal_01",
                        "_caption": "Postal Worker Male"
                    },
                    {
                        "_name": "s_m_m_postal_02",
                        "_caption": "Postal Worker Male 2"
                    },
                    {
                        "_name": "s_m_m_prisguard_01",
                        "_caption": "Prison Guard"
                    },
                    {
                        "_name": "s_m_m_raceorg_01",
                        "_caption": "Racer Organisator"
                    },
                    {
                        "_name": "s_m_m_scientist_01",
                        "_caption": "Scientist"
                    },
                    {
                        "_name": "s_m_m_security_01",
                        "_caption": "Security Guard"
                    },
                    {
                        "_name": "s_m_m_snowcop_01",
                        "_caption": "Snow Cop Male"
                    },
                    {
                        "_name": "s_m_m_strperf_01",
                        "_caption": "Street Performer"
                    },
                    {
                        "_name": "s_m_m_strpreach_01",
                        "_caption": "Street Preacher"
                    },
                    {
                        "_name": "s_m_m_strvend_01",
                        "_caption": "Street Vendor"
                    },
                    {
                        "_name": "s_m_m_studioassist_02",
                        "_caption": "Studio Assistant Male"
                    },
                    {
                        "_name": "s_m_m_studioprod_01",
                        "_caption": "Studio Producer Male"
                    },
                    {
                        "_name": "s_m_m_studiosoung_02",
                        "_caption": "Studio Sound Engineer Male"
                    },
                    {
                        "_name": "s_m_m_subcrew_01",
                        "_caption": "Sub Crew Male"
                    },
                    {
                        "_name": "s_m_m_tattoo_01",
                        "_caption": "Tattoo Artist 2"
                    },
                    {
                        "_name": "s_m_m_trucker_01",
                        "_caption": "Trucker Male"
                    },
                    {
                        "_name": "s_m_m_ups_01",
                        "_caption": "UPS Driver"
                    },
                    {
                        "_name": "s_m_m_ups_02",
                        "_caption": "UPS Driver 2"
                    },
                    {
                        "_name": "s_m_m_warehouse_01",
                        "_caption": "Warehouse Employee Male"
                    },
                    {
                        "_name": "s_m_o_busker_01",
                        "_caption": "Busker"
                    },
                    {
                        "_name": "s_m_y_airworker",
                        "_caption": "Air Worker Male"
                    },
                    {
                        "_name": "s_m_y_ammucity_01",
                        "_caption": "Ammu-Nation City Clerk"
                    },
                    {
                        "_name": "s_m_y_armymech_01",
                        "_caption": "Army Mechanic"
                    },
                    {
                        "_name": "s_m_y_autopsy_01",
                        "_caption": "Autopsy Tech"
                    },
                    {
                        "_name": "s_m_y_barman_01",
                        "_caption": "Barman"
                    },
                    {
                        "_name": "s_m_y_baywatch_01",
                        "_caption": "Baywatch Male"
                    },
                    {
                        "_name": "s_m_y_blackops_01",
                        "_caption": "Black Ops Soldier"
                    },
                    {
                        "_name": "s_m_y_blackops_02",
                        "_caption": "Black Ops Soldier 2"
                    },
                    {
                        "_name": "s_m_y_blackops_03",
                        "_caption": "Black Ops Soldier 3"
                    },
                    {
                        "_name": "s_m_y_busboy_01",
                        "_caption": "Busboy"
                    },
                    {
                        "_name": "s_m_y_casino_01",
                        "_caption": "Casino Staff"
                    },
                    {
                        "_name": "s_m_y_chef_01",
                        "_caption": "Chef"
                    },
                    {
                        "_name": "s_m_y_clown_01",
                        "_caption": "Clown"
                    },
                    {
                        "_name": "s_m_y_clubbar_01",
                        "_caption": "Club Bartender Male"
                    },
                    {
                        "_name": "s_m_y_construct_01",
                        "_caption": "construction Worker"
                    },
                    {
                        "_name": "s_m_y_construct_02",
                        "_caption": "construction Worker 2"
                    },
                    {
                        "_name": "s_m_y_cop_01",
                        "_caption": "Cop Male"
                    },
                    {
                        "_name": "s_m_y_dealer_01",
                        "_caption": "Dealer"
                    },
                    {
                        "_name": "s_m_y_devinsec_01",
                        "_caption": "Devin's Security"
                    },
                    {
                        "_name": "s_m_y_dockwork_01",
                        "_caption": "Dock Worker"
                    },
                    {
                        "_name": "s_m_y_doorman_01",
                        "_caption": "Doorman"
                    },
                    {
                        "_name": "s_m_y_dwservice_01",
                        "_caption": "DW Airport Worker"
                    },
                    {
                        "_name": "s_m_y_dwservice_02",
                        "_caption": "DW Airport Worker 2"
                    },
                    {
                        "_name": "s_m_y_factory_01",
                        "_caption": "Factory Worker Male"
                    },
                    {
                        "_name": "s_m_y_fireman_01",
                        "_caption": "Fireman Male"
                    },
                    {
                        "_name": "s_m_y_garbage",
                        "_caption": "Garbage Worker"
                    },
                    {
                        "_name": "s_m_y_grip_01",
                        "_caption": "Grip"
                    },
                    {
                        "_name": "s_m_y_hwaycop_01",
                        "_caption": "Highway Cop"
                    },
                    {
                        "_name": "s_m_y_marine_01",
                        "_caption": "Marine Young"
                    },
                    {
                        "_name": "s_m_y_marine_02",
                        "_caption": "Marine Young 2"
                    },
                    {
                        "_name": "s_m_y_marine_03",
                        "_caption": "Marine Young 3"
                    },
                    {
                        "_name": "s_m_y_mime",
                        "_caption": "Mime Artist"
                    },
                    {
                        "_name": "s_m_y_pestcont_01",
                        "_caption": "Pest Control"
                    },
                    {
                        "_name": "s_m_y_pilot_01",
                        "_caption": "Pilot"
                    },
                    {
                        "_name": "s_m_y_prismuscl_01",
                        "_caption": "Prisoner (Muscular)"
                    },
                    {
                        "_name": "s_m_y_prisoner_01",
                        "_caption": "Prisoner"
                    },
                    {
                        "_name": "s_m_y_ranger_01",
                        "_caption": "Ranger Male"
                    },
                    {
                        "_name": "s_m_y_robber_01",
                        "_caption": "Robber"
                    },
                    {
                        "_name": "s_m_y_sheriff_01",
                        "_caption": "Sheriff Male"
                    },
                    {
                        "_name": "s_m_y_shop_mask",
                        "_caption": "Mask Salesman"
                    },
                    {
                        "_name": "s_m_y_strvend_01",
                        "_caption": "Street Vendor Young"
                    },
                    {
                        "_name": "s_m_y_swat_01",
                        "_caption": "SWAT"
                    },
                    {
                        "_name": "s_m_y_uscg_01",
                        "_caption": "US Coastguard"
                    },
                    {
                        "_name": "s_m_y_valet_01",
                        "_caption": "Valet"
                    },
                    {
                        "_name": "s_m_y_waiter_01",
                        "_caption": "Waiter"
                    },
                    {
                        "_name": "s_m_y_waretech_01",
                        "_caption": "Warehouse Technician"
                    },
                    {
                        "_name": "s_m_y_westsec_01",
                        "_caption": "Duggan Secruity"
                    },
                    {
                        "_name": "s_m_y_westsec_02",
                        "_caption": "Duggan Security 2"
                    },
                    {
                        "_name": "s_m_y_winclean_01",
                        "_caption": "Window Cleaner"
                    },
                    {
                        "_name": "s_m_y_xmech_01",
                        "_caption": "Mechanic"
                    },
                    {
                        "_name": "s_m_y_xmech_02",
                        "_caption": "MC Clubhouse Mechanic"
                    },
                    {
                        "_name": "s_m_m_bouncer_02",
                        "_caption": "Bouncer 2"
                    },
                    {
                        "_name": "s_m_m_drugprocess_01",
                        "_caption": "Drug Processer"
                    },
                    {
                        "_name": "s_m_m_fieldworker_01",
                        "_caption": "Field Worker"
                    },
                    {
                        "_name": "s_m_m_highsec_04",
                        "_caption": "High Security 4"
                    }
                ],
                "_name": "ScenarioMale"
            },
            {
                "Ped": [
                    {
                        "_name": "u_f_m_casinocash_01",
                        "_caption": "Casino Cashier"
                    },
                    {
                        "_name": "u_f_m_casinoshop_01",
                        "_caption": "Casino shop owner"
                    },
                    {
                        "_name": "u_f_m_corpse_01",
                        "_caption": "Corpse Female"
                    },
                    {
                        "_name": "u_f_m_debbie_01",
                        "_caption": "Debbie (AgathaÃ‚Â´s Secretary)"
                    },
                    {
                        "_name": "u_f_m_drowned_01",
                        "_caption": "Drowned Victim Female"
                    },
                    {
                        "_name": "u_f_m_miranda",
                        "_caption": "Miranda"
                    },
                    {
                        "_name": "u_f_m_miranda_02",
                        "_caption": "Miranda 2"
                    },
                    {
                        "_name": "u_f_m_promourn_01",
                        "_caption": "Prologue Mourner Female"
                    },
                    {
                        "_name": "u_f_o_carol",
                        "_caption": "Carol"
                    },
                    {
                        "_name": "u_f_o_eileen",
                        "_caption": "Eileen"
                    },
                    {
                        "_name": "u_f_o_moviestar",
                        "_caption": "Movie Star Female"
                    },
                    {
                        "_name": "u_f_o_prolhost_01",
                        "_caption": "Prologue Host Old Female"
                    },
                    {
                        "_name": "u_f_y_beth",
                        "_caption": "Beth"
                    },
                    {
                        "_name": "u_f_y_bikerchic",
                        "_caption": "Biker Chic Female"
                    },
                    {
                        "_name": "u_f_y_comjane",
                        "_caption": "Jane"
                    },
                    {
                        "_name": "u_f_y_corpse_01",
                        "_caption": "Corpse Young Female"
                    },
                    {
                        "_name": "u_f_y_corpse_02",
                        "_caption": "Corpse Young Female 2"
                    },
                    {
                        "_name": "u_f_y_danceburl_01",
                        "_caption": "Female Club Dancer (Burlesque)"
                    },
                    {
                        "_name": "u_f_y_dancelthr_01",
                        "_caption": "Female Club Dancer (Leather)"
                    },
                    {
                        "_name": "u_f_y_dancerave_01",
                        "_caption": "Female Club Dancer (Rave)"
                    },
                    {
                        "_name": "u_f_y_hotposh_01",
                        "_caption": "Hot Posh Female"
                    },
                    {
                        "_name": "u_f_y_jewelass_01",
                        "_caption": "Jeweller Assistant"
                    },
                    {
                        "_name": "u_f_y_lauren",
                        "_caption": "Lauren"
                    },
                    {
                        "_name": "u_f_y_mistress",
                        "_caption": "Mistress"
                    },
                    {
                        "_name": "u_f_y_poppymich",
                        "_caption": "Poppy Mitchell"
                    },
                    {
                        "_name": "u_f_y_poppymich_02",
                        "_caption": "Poppy Mitchell 2"
                    },
                    {
                        "_name": "u_f_y_princess",
                        "_caption": "Princess"
                    },
                    {
                        "_name": "u_f_y_spyactress",
                        "_caption": "Spy Actress"
                    },
                    {
                        "_name": "u_f_y_taylor",
                        "_caption": "Taylor"
                    }
                ],
                "_name": "StoryScenarioFemale"
            },
            {
                "Ped": [
                    {
                        "_name": "U_M_M_Yeti",
                        "_caption": "Yeti (White Bigfoot / Sassquash)"
                    },
                    {
                        "_name": "u_m_m_aldinapoli",
                        "_caption": "Al Di Napoli Male"
                    },
                    {
                        "_name": "u_m_m_bankman",
                        "_caption": "Bank Manager Male"
                    },
                    {
                        "_name": "u_m_m_bikehire_01",
                        "_caption": "Bike Hire Guy"
                    },
                    {
                        "_name": "u_m_m_blane",
                        "_caption": "Blane"
                    },
                    {
                        "_name": "u_m_m_curtis",
                        "_caption": "Curtis"
                    },
                    {
                        "_name": "u_m_m_doa_01",
                        "_caption": "DOA Male"
                    },
                    {
                        "_name": "u_m_m_edtoh",
                        "_caption": "Ed Toh"
                    },
                    {
                        "_name": "u_m_m_fibarchitect",
                        "_caption": "FIB Architect"
                    },
                    {
                        "_name": "u_m_m_filmdirector",
                        "_caption": "Movie Director"
                    },
                    {
                        "_name": "u_m_m_glenstank_01",
                        "_caption": "Glen-Stank Male"
                    },
                    {
                        "_name": "u_m_m_griff_01",
                        "_caption": "Griff"
                    },
                    {
                        "_name": "u_m_m_jesus_01",
                        "_caption": "Jesus"
                    },
                    {
                        "_name": "u_m_m_jewelsec_01",
                        "_caption": "Jeweller Security"
                    },
                    {
                        "_name": "u_m_m_jewelthief",
                        "_caption": "Jewel Thief"
                    },
                    {
                        "_name": "u_m_m_juggernaut_03",
                        "_caption": "Avon Juggernaut 3"
                    },
                    {
                        "_name": "u_m_m_markfost",
                        "_caption": "Mark Fostenburg"
                    },
                    {
                        "_name": "u_m_m_partytarget",
                        "_caption": "Party Target"
                    },
                    {
                        "_name": "u_m_m_prolsec_01",
                        "_caption": "Prologue Security"
                    },
                    {
                        "_name": "u_m_m_promourn_01",
                        "_caption": "Prologue Mourner Male"
                    },
                    {
                        "_name": "u_m_m_rivalpap",
                        "_caption": "Rival Paparazzo"
                    },
                    {
                        "_name": "u_m_m_spyactor",
                        "_caption": "Spy Actor"
                    },
                    {
                        "_name": "u_m_m_streetart_01",
                        "_caption": "Street Art Male"
                    },
                    {
                        "_name": "u_m_m_vince",
                        "_caption": "Vince"
                    },
                    {
                        "_name": "u_m_m_willyfist",
                        "_caption": "Love Fist Willy"
                    },
                    {
                        "_name": "u_m_m_yulemonster",
                        "_caption": "The Gooch (Grinch Parody)"
                    },
                    {
                        "_name": "u_m_o_dean",
                        "_caption": "Dean"
                    },
                    {
                        "_name": "u_m_o_filmnoir",
                        "_caption": "Movie Corpse (Suited)"
                    },
                    {
                        "_name": "u_m_o_finguru_01",
                        "_caption": "Financial Guru"
                    },
                    {
                        "_name": "u_m_o_taphillbilly",
                        "_caption": "Jesco White (Tapdancing Hillbilly)"
                    },
                    {
                        "_name": "u_m_o_tramp_01",
                        "_caption": "Tramp Old Male"
                    },
                    {
                        "_name": "u_m_y_abner",
                        "_caption": "Abner"
                    },
                    {
                        "_name": "u_m_y_antonb",
                        "_caption": "Anton Beaudelaire"
                    },
                    {
                        "_name": "u_m_y_babyd",
                        "_caption": "Baby D"
                    },
                    {
                        "_name": "u_m_y_baygor",
                        "_caption": "Kifflom Guy"
                    },
                    {
                        "_name": "u_m_y_burgerdrug_01",
                        "_caption": "Burger Drug Worker"
                    },
                    {
                        "_name": "u_m_y_caleb",
                        "_caption": "Caleb"
                    },
                    {
                        "_name": "u_m_y_chip",
                        "_caption": "Chip"
                    },
                    {
                        "_name": "u_m_y_corpse_01",
                        "_caption": "Dead Courier"
                    },
                    {
                        "_name": "u_m_y_croupthief_01",
                        "_caption": "Casino Thief"
                    },
                    {
                        "_name": "u_m_y_cyclist_01",
                        "_caption": "Cyclist Male"
                    },
                    {
                        "_name": "u_m_y_danceburl_01",
                        "_caption": "Male Club Dancer (Burlesque)"
                    },
                    {
                        "_name": "u_m_y_dancelthr_01",
                        "_caption": "Male Club Dancer (Leather)"
                    },
                    {
                        "_name": "u_m_y_dancerave_01",
                        "_caption": "Male Club Dancer (Rave)"
                    },
                    {
                        "_name": "u_m_y_fibmugger_01",
                        "_caption": "FIB Mugger"
                    },
                    {
                        "_name": "u_m_y_gabriel",
                        "_caption": "Gabriel"
                    },
                    {
                        "_name": "u_m_y_guido_01",
                        "_caption": "Guido"
                    },
                    {
                        "_name": "u_m_y_gunvend_01",
                        "_caption": "Gun Vendor"
                    },
                    {
                        "_name": "u_m_y_hippie_01",
                        "_caption": "Hippie Male"
                    },
                    {
                        "_name": "u_m_y_imporage",
                        "_caption": "Impotent Rage"
                    },
                    {
                        "_name": "u_m_y_juggernaut_02",
                        "_caption": "Avon Juggernaut 2"
                    },
                    {
                        "_name": "u_m_y_juggernaut_01",
                        "_caption": "Avon Juggernaut"
                    },
                    {
                        "_name": "u_m_y_justin",
                        "_caption": "Justin Sex Tape Male"
                    },
                    {
                        "_name": "u_m_y_mani",
                        "_caption": "Mani"
                    },
                    {
                        "_name": "u_m_y_militarybum",
                        "_caption": "Ex-Mil Bum"
                    },
                    {
                        "_name": "u_m_y_paparazzi",
                        "_caption": "Paparazzi Young Male"
                    },
                    {
                        "_name": "u_m_y_party_01",
                        "_caption": "Partygoer Male"
                    },
                    {
                        "_name": "u_m_y_pogo_01",
                        "_caption": "Pogo the Monkey"
                    },
                    {
                        "_name": "u_m_y_prisoner_01",
                        "_caption": "Prisoner"
                    },
                    {
                        "_name": "u_m_y_proldriver_01",
                        "_caption": "Prologue Driver"
                    },
                    {
                        "_name": "u_m_y_rsranger_01",
                        "_caption": "Republican Space Ranger"
                    },
                    {
                        "_name": "u_m_y_sbike",
                        "_caption": "Sports Biker"
                    },
                    {
                        "_name": "u_m_y_smugmech_01",
                        "_caption": "Hangar Mechanic"
                    },
                    {
                        "_name": "u_m_y_staggrm_01",
                        "_caption": "Stag Party Groom"
                    },
                    {
                        "_name": "u_m_y_tattoo_01",
                        "_caption": "Tattoo Artist"
                    },
                    {
                        "_name": "u_m_y_ushi",
                        "_caption": "Ushi"
                    },
                    {
                        "_name": "u_m_y_zombie_01",
                        "_caption": "Zombie"
                    }
                ],
                "_name": "StoryScenarioMale"
            },
            {
                "Ped": [
                    {
                        "_name": "hc_driver",
                        "_caption": "Jewel Heist Driver"
                    },
                    {
                        "_name": "hc_gunman",
                        "_caption": "Jewel Heist Gunman"
                    },
                    {
                        "_name": "hc_hacker",
                        "_caption": "Jewel Heist Hacker"
                    },
                    {
                        "_name": "g_m_m_zombie_01",
                        "_caption": "Zombie 1"
                    },
                    {
                        "_name": "g_m_m_zombie_02",
                        "_caption": "Zombie 2"
                    },
                    {
                        "_name": "g_m_m_zombie_03",
                        "_caption": "Zombie 3"
                    }
                ],
                "_name": "Others"
            }
        ]
    }
}

const pedListXml = oldPed.PedList.Category.reduce((acc, category) => {
    // For each category, check if it has `Ped` entries and extract `_name` from each.
    if (category.Ped) {
        const names = category.Ped.map(ped => ped._name.toLowerCase());
        acc.push(...names);
    }
    return acc;
}, []);

export async function generateMissingPeds() {
    let data = await getDataFromGithub(githubUrl.peds);
    if (data) {
        data = data.filter(x => !x.DlcName.toLowerCase().includes('g9ec') && !x.Name.toLowerCase().startsWith('slod_') && x.Name.toLowerCase() !== 'mp_headtargets');
        const newPedsNames = data.map(x=>{return x.Name.toLowerCase()})
        const missingInPedlistXml = newPedsNames.filter(item => !pedListXml.includes(item));
        writeToFile('missingInPedlistXml.json', JSON.stringify(missingInPedlistXml, null, 4))
    }
}

