const list = [
  {
    id: 1,
    title: "Pasifik Hakkında",
    author: "Bu çok yönlü gözlükler çağdaş bir klasiktir. Siyah asetat kaplaması ve tam jant dikdörtgen şekli ile Pasifik, her kıyafetle harika görünür.",
    price: 39,
    img: "https://img.ebdcdn.com/product/frame/white/pl5827_1.jpg?im=Resize,width=360,height=180,aspect=fill;UnsharpMask,sigma=1.0,gain=1.0&q=85",
    amount: 1,
  },
  {
    id: 2,
    title: "Botanikçi Hakkında",
    author: "Botanikçinin zamansız ve sade şekli kendi içinde şıktır, ancak bu çerçevede bulunan kaplamaların karışımı onu gerçekten parlatan şeydir. Bu Siyah çerçeve, sıcak gölgeli mermer tapınakları ile tamamlanmaktadır. İkisi şık ve modern bir gözlük seti oluşturmak için bir araya geliyor.",
    price: 35,
    img: "https://img.ebdcdn.com/product/frame/white/pl6717_1.jpg?im=Resize,width=360,height=180,aspect=fill;UnsharpMask,sigma=1.0,gain=1.0&q=85",
    amount: 1,
  },
  {
    id: 3,
    title: "St Michel hakkında",
    author: "Sizi mütevazı bırakırken tarzınızı yükseltmek için bir çift gözlük arıyorsanız, St Michel ile tanışın. Şık ve sade fırçalanmış gümüş çerçeveler çok yönlü ve inceliklidir. Çocuklar için yeterince moda ama gümüş tilkiler için yeterince klasik olan bu çerçeveler, dualarınızın cevabıdır.",
    price: 35,
    img: "https://img.ebdcdn.com/product/frame/white/mt6550_1.jpg?im=Resize,width=360,height=180,aspect=fill;UnsharpMask,sigma=1.0,gain=1.0&q=85",
    amount: 1,
  },
  {
    id: 4,
    title: "Vinil Hakkında",
    author: "Vinyl in Brown ile daha iyi günlere geri dönün. Bu retro esintili çerçeve, oyulmuş tapınak kolları ve karakteristik kare lensleriyle klas bir yanadır.",
    price: 42,
    img: "https://img.ebdcdn.com/product/frame/white/pm0549_1.jpg?im=Resize,width=360,height=180,aspect=fill;UnsharpMask,sigma=1.0,gain=1.0&q=85",
    amount: 1,
  },
  {
    id: 5,
    title: "Hareket Hakkında",
    author: "Altın Hareket ile ilk adımı atın. Bu göz alıcı, hayattan daha büyük metal çerçeve sadece stil sızdırıyor.",
    price: 35,
    img: "https://img.ebdcdn.com/product/frame/white/mt6689_1.jpg?im=Resize,width=360,height=180,aspect=fill;UnsharpMask,sigma=1.0,gain=1.0&q=85",
    amount: 1,
  },
  {
    id: 6,
    title: "Hepburn Hakkında",
    author: "Retro boynuz kenarlı şekli ile fütüristik Clear kaplaması arasında başarılı bir kontrast oluşturan bu çerçeve, gittiğiniz her yerde kafaları döndüreceğinden emin olabilirsiniz. Hepburn, dayanıklı asetattan yapılmıştır ve esnek ve dayanıklı olmasını sağlamak için yaylı menteşelere sahiptir.",
    price: 45,
    img: "https://img.ebdcdn.com/product/frame/white/pl5370_1.jpg?im=Resize,width=360,height=180,aspect=fill;UnsharpMask,sigma=1.0,gain=1.0&q=85",
    amount: 1,
  },
  {
    id: 7,
    title: "Notting Hill hakkında ",
    author: "Fildişi kaplumbağa çerçevesi hakkında çok sofistike bir şey var. Ekstra cazibe, özellikle klasik boynuz şeklinin hafif kedi gözü yeteneği ile eşleştirildiğinde uzun bir yol kat eder - ayrıca, şık olduğu kadar rahat bir görünüm için yaylı menteşelerle tasarlanmıştır. ",
    price: 35,
    img: "https://img.ebdcdn.com/product/frame/white/pl4962_1.jpg?im=Resize,width=360,height=180,aspect=fill;UnsharpMask,sigma=1.0,gain=1.0&q=85",
    amount: 1,
  },
  {
    id: 8,
    title: "Urban Hakkında",
    author: "Urban, sokak profesyonelleri için yarı çerçevesiz bir çerçevedir. Ayarlanabilir burun pedleri, bu Siyah Çelik stilini her duruma uygun bir hit haline getirir.",
    price: 55,
    img: "https://img.ebdcdn.com/product/frame/white/hmt0159_1.jpg?im=Resize,width=360,height=180,aspect=fill;UnsharpMask,sigma=1.0,gain=1.0&q=85",
    amount: 1,
  },
  {
    id: 9,
    title: "Star Hakkında",
    author: "Kırmızı renkte Star, başka hiçbir şeye benzemeyen bir kedi gözü çerçevesidir. Bu şık yarı çerçeveli stil, kullanıcının kaş çizgisine dikkat çekerken, çerçevesiz alt yarısı ile ince bir profil tutar.",
    price: 42,
    img: "https://img.ebdcdn.com/product/frame/white/hmt0157_1.jpg?im=Resize,width=360,height=180,aspect=fill;UnsharpMask,sigma=1.0,gain=1.0&q=85",
    amount: 1,
  },
  {
    id: 10,
    title: "Planete Hakkında",
    author: "Planete, modern tasarımın eksantrikliklerini kucaklar ve onları kendine ait kılar. Dört çift göz alıcı çift çivi, yaylı menteşeler ve benzersiz bir anahtar deliği burun köprüsü tasarımıyla bu tam kenarlı çerçevenin modası asla geçmeyecek.",
    price: 70,
    img: "https://img.ebdcdn.com/product/frame/white/pl6758_1.jpg?im=Resize,width=360,height=180,aspect=fill;UnsharpMask,sigma=1.0,gain=1.0&q=85",
    amount: 1,
  },
  {
    id: 11,
    title: "Ray-Ban RB5277 hakkında",
    author: "Mat siyah renkteki bu klasik, ince asetat çerçeveleri giyin ve zahmetsiz serin ve ince sofistike bir havanın tadını çıkarın. Bu hafif dikdörtgen stil zahmetsizce trenddedir ve çok yönlülükleri onları birçok yüz şekli için çok uygun hale getirir.",
    price: 156,
    img: "https://img.ebdcdn.com/product/frame/white/lupl00160_1.jpg?im=Resize,width=360,height=180,aspect=fill;UnsharpMask,sigma=1.0,gain=1.0&q=85",
    amount: 1,
  },
  {
    id: 12,
    title: "Ray-Ban RB7046 hakkında",
    author: "Ray-Ban'ın kusursuz şık gözlükleriyle her türlü görünümü tamamlayın. Zıt bej kollara sahip şeffaf, büyük boyutlu Propionate çerçeveler göz alıcı ve eğlencelidir. Mükemmel derecede hafif, ancak dayanıklı yapısı, onları tüm gün kullanım için çok uygun hale getirir. Diğer renklerin aksine, şeffaf çerçevelerin kauçuk bir cephesi yoktur.",
    price: 154,
    img: "https://img.ebdcdn.com/product/frame/white/lupl00178_1.jpg?im=Resize,width=360,height=180,aspect=fill;UnsharpMask,sigma=1.0,gain=1.0&q=85",
    amount: 1,
  },
];

export default list;
