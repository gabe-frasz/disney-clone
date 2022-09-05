// * queries response
export type BrandPageQuery = {
  brand: {
    backgroundVideo: {
      url: string;
    };
    backgroundImage: {
      url: string;
    };
  };
};
export type HomepageQuery = {
  page: {
    homepage: {
      slider: null;
      brands: {
        id: string;
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
export type OriginalsVideosQuery = VideosByTypeQuery;

export type VideoByIDQuery = {
  video: {
    mp4: {
      url: string;
    };
  };
};

export type VideoBySlugQuery = {
  videos: {
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

// * contexts
export type ThemeContextValue = {
  appTheme: "light" | "dark";
  toggleTheme: () => void;
  setAppThemeToLight: () => void;
  setAppThemeToDark: () => void;
};

// * layout components

// * module components

// * widget components
