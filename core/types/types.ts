import { AuthProvider } from "firebase/auth";

// * queries response
export type BrandPageQuery = {
  brand: {
    name: string;
    backgroundVideo: {
      url: string;
    };
    backgroundImage: {
      url: string;
    };
  };
  videos: {
    id: string;
    videoType: "movie" | "serie";
    videoInfo: {
      slug: string;
      thumbnails: {
        horizontal: {
          url: string;
        };
        vertical: {
          url: string;
        };
      };
    };
  }[];
};
export type HomepageQuery = {
  page: {
    homepage: {
      slider: {
        videos: {
          id: string;
          videoType: "movie" | "serie";
          videoInfo: {
            title: string;
            banner: {
              url: string;
            };
            slug: string;
            videoLogo: {
              url: string;
            };
            brand: {
              brandLogo: {
                url: string;
              };
            };
          };
        }[];
      };
      showcase: {
        id: string;
        title: string;
        videos: {
          id: string;
          videoType: "movie" | "serie";
          videoInfo: {
            slug: string;
            thumbnails: {
              horizontal: {
                url: string;
              };
              vertical: {
                url: string;
              };
            };
          };
        }[];
      }[];
      brands: {
        id: string;
        name: string;
        slug: string;
        brandLogo: {
          url: string;
        };
        backgroundGif: {
          url: string;
        };
      }[];
    };
  };
};
export type OriginalsVideosQuery = {
  videos: {
    id: string;
    videoType: "movie" | "serie";
    videoInfo: {
      thumbnails: {
        horizontal: {
          url: string;
        };
        vertical: {
          url: string;
        };
      };
      slug: string;
      genre: string[];
    };
  }[];
};
export type ProfileQuery = {
  profile: Profile;
};
export type ProfilesQuery = {
  profiles: ProfileQuery["profile"][];
};
export type VideoByIDQuery = {
  video: {
    mp4: {
      url: string;
    }[];
  };
};
export type VideoBySlugQuery = {
  videos: {
    id: string;
    videoInfo: {
      title: string;
      description: string;
      releaseYear: number;
      genre: string[];
      banner: {
        url: string;
      };
      videoLogo: {
        url: string;
      };
      slug: string;
    };
  }[];
};
export type VideosByTypeQuery = {
  videos: {
    id: string;
    videoInfo: {
      thumbnails: {
        horizontal: {
          url: string;
        };
        vertical: {
          url: string;
        };
      };
      slug: string;
      genre: string[];
    };
  }[];
};
export type VideosByWatchlistQuery = {
  profile: {
    watchlist: {
      id: string;
      videoType: "movie" | "serie";
      videoInfo: {
        thumbnails: {
          horizontal: {
            url: string;
          };
          vertical: {
            url: string;
          };
        };
        slug: string;
      };
    }[];
  };
};
export type IsInWatchlistQuery = {
  profile: {
    watchlist:
      | {
          id?: string;
        }[]
      | [];
  };
};

// * mutations response
export type AddProfileMutation = {
  updateAccount: {
    profiles: Profile[];
  };
};

// * contexts
export type Account = {
  id: string;
  name: string | null;
  email: string | null;
  avatar: string | null;
  signOut: () => Promise<void>;
};
export type AuthContextValue = {
  account: Account | null;
  loading: boolean;
  signIn: (provider: AuthProvider) => Promise<void>;
  signUserOut: () => Promise<void>;
};
export type ProfileContextValue = {
  selectedProfile: Profile | null;
  selectProfile: (profile: Profile) => void;
};
export type ThemeContextValue = {
  appTheme: "light" | "dark";
  toggleTheme: () => void;
  setAppThemeToLight: () => void;
  setAppThemeToDark: () => void;
};

// * entities
export type Brand = {
  id: string;
  name: string;
  slug: string;
  logo: string;
  backgroundGif: string;
};
export type Profile = {
  id: string;
  username: string;
  avatarUrl: string | null;
};
export type Slide = {
  id: string;
  imageUrl: string;
  title: string;
  logo: string;
  slug: string;
  type: "movies" | "series";
};
export type Video = {
  id: string;
  type: "movie" | "serie";
  slug: string;
  thumbnailX: string;
  thumbnailY: string;
};
export type VideoList = {
  id: string;
  title: string;
  videos: Video[];
};
