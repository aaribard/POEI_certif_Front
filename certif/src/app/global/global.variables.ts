export class GlobalVariable {
    public static appName: string = "SLAQUE";

    public static idCanalGeneral: number = 1;

    public static NameIdCanalSession: string = 'idcanalsession';
    
    public static appUrl: string = "http://localhost:8080";

    public static appUrlList: string = "/list";
    public static appUrlSave: string = "/save";
    public static appUrlDelete: string = "/delete";
    public static appUrlEdit: string = "/edit";
    public static appUrlFindById: string = "/findbyid";
    public static appUrlFindByCanal: string = "/findbycanal";

    public static appUrlCanal = this.appUrl + "/canal";
    public static appUrlCanalList: string = this.appUrlCanal + this.appUrlList;
    public static appUrlCanalAdd: string = this.appUrlCanal + this.appUrlSave;
    public static appUrlCanalDelete: string = this.appUrlCanal + this.appUrlDelete;
    public static appUrlCanalEdit: string = this.appUrlCanal + this.appUrlEdit;
    public static appUrlCanalFindByID: string = this.appUrlCanal + this.appUrlFindById;

    public static appUrlMessage = this.appUrl + "/message";
    public static appUrlMessageList: string = this.appUrlMessage + this.appUrlList;
    public static appUrlMessageAdd: string = this.appUrlMessage + this.appUrlSave;
    public static appUrlMessageFindByCanal: string = this.appUrlMessage + this.appUrlFindByCanal;

    public static appUrlUtilisateur = this.appUrl + "/utilisateur";
    public static appUrlUtilisateurList: string = this.appUrlUtilisateur + this.appUrlList;
    public static appUrlUtilisateurFindByID: string = this.appUrlUtilisateur + this.appUrlFindById;

}