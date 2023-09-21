export class Song {
    id:number | undefined;
    image : string | undefined;
    album : string | undefined;
    duration: number | undefined
    song : string | undefined;
    artist : string | undefined

    constructor(id: number, image : string , album : string, duration : number,  song : string, artist:string){
        this.id = id,
        this.image = image,
        this.album = album,
        this.duration = duration,
        this.song = song,
        this.artist = artist
    }
}
export const DemoSong : Song [] = [
    new Song(1, 'https://www.shutterstock.com/shutterstock/photos/1887136297/display_1500/stock-photo-young-female-visitor-looking-reflective-while-sitting-on-a-bench-and-admiring-the-various-paintings-1887136297.jpg', "Donna che guarda un quadro",478839, "madonna", "Il quadro"),
    new Song(2, 'https://media.istockphoto.com/id/1218961153/it/foto/museo-darte.jpg?s=612x612&w=0&k=20&c=hqqACcEDsu4ovRHHDq6lgasfNOwR2i41YdrRVMWMhTI=', "un uomo cerca di vendere il quadro ad una donna sorridente", 478839,"madonna", "La Vendita"),
    new Song(3, 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTl_2LjbHYe93QuwQY4RjdqefGBBBnam1D_R5w6DX9rz7lCky0uwFlyDprnr2Ja1eDTrJM&usqp=CAU', "L'artista orgoglioso del suo lavoro si mostra per la prima volta", 478839,"Anto", "L'artista"),
    new Song(4, 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQW-4tukn6TyQNvXmL_dyr_uZ-N1iYLvUhnShvU0ckeBgjg-XXdwO2lddGHv2H83Q--ZLk&usqp=CAU', "Il famoso Artista Polacco Wikowsky si mostra orgoglios davanti al suo capolavoro",478839,"luigi", "Wikowsky"),
    new Song(5, 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxEfiTnmSQ9LcdVVjInX6jJNHuZ27J4uEUEYdbbR1SuPV3Y8JPOfcpNlT36FEqLJD2y6A&usqp=CAU', "Nei sobborghi di NY un artista contemporaneo mostra il suo lavoro",478839, "Francesco", "NY City"),
    new Song (6, 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVGrCu8dtCXPc0UUrKAEPJa62ZyflJVYPxD1uWm1zmVnjU0-abtpBsUgE1gbKJjeC5C8E&usqp=CAU', "Lo studio del collettivo Artistico Wokder Art",478839,"Giuseppe", "Wonder Art")
]


