export class Serie {
  id: number;
  name: string;
  channel: string;
  seasons: number;
  synapsis: string;
  link: string;
  poster: string;

  constructor(

    id: number,
    name: string,
    channel: string,
    seasons: number,
    synapsis: string,
    link: string,
    poster: string
  ) {
    this.id = id;
    this.name = name;
    this.channel = channel;
    this.seasons = seasons;
    this.synapsis = synapsis;
    this.link = link;
    this.poster = poster;
  }

}
