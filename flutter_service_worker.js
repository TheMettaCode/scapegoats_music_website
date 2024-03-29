'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "81f28522db473d9139d0d4fb8d614063",
".git/config": "2ba05bfbe8247f96a523971b6ba5691e",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "7ad904ecbfe4f839c4532af77bd4bef0",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "f143e6d0d1a85494cf689fda58bfbfb2",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "915e60f3ceb37c7c543880644dfc8a5d",
".git/logs/refs/heads/main": "915e60f3ceb37c7c543880644dfc8a5d",
".git/logs/refs/remotes/origin/main": "ba2c83f47c624ad727c4f3acda77a1c0",
".git/objects/01/3d4a6a53334fae827a32824eaf51a889396514": "1035270d429ce7cb68c5f0febf0fc0f9",
".git/objects/03/80235e6d37d5575c04661ab52f37c74426b990": "788fc1fa3a2a3fc3a29d2b9dde82769c",
".git/objects/03/d219dde85a2bc6af42767907b10876e40ab342": "555f90b33154ea425ee460ad75c6a1b9",
".git/objects/04/ac4f46551d0d97a82b9a8dec34a28cc7da152d": "8ed50058c612c642ef379c7c74e15031",
".git/objects/07/356d02274e153629013dbf5b38d4f63c7f34b5": "f64d606ed941f35d968c4332fbec70dc",
".git/objects/11/3e70099bab7a06ba1683600b116d1e88bc2d04": "dd8cbe14ea1b42c89c84f1fde68872da",
".git/objects/16/b56e7261834e3c5a3b1cb9697d9a3b3a254b40": "30bf6a28b7f777c9e9116a310296b3ab",
".git/objects/17/fbdfb44655a50e305619a143004fb7896ab232": "26f96aaf32b7bd261ab18cb3812c0934",
".git/objects/1a/9e2648081220e22f6a5360b8f886615c13a8f3": "f9c5ea66fd661c9701152ff934b940bb",
".git/objects/1b/bb993f30be4b1eb867f62d3f743d74350329a2": "0913b420fe5fa416104fc0dc8a093551",
".git/objects/1b/c58d81669e66dc2f9fe45269e16ee5efb51f51": "ebdfeefbad2bce796bebd9218937a859",
".git/objects/1d/65c054983a016c2e2f9bcc41c1fb6b7ed01900": "31a51f92bb83adf4b5e6e262de19fbcf",
".git/objects/1e/f59a3e94c5a3a6945984c6376ef20e3a6fdcef": "9a347159601706b926635783511d88d3",
".git/objects/1f/089785489048468a90f2e641ca136dc3a5bb36": "75edd74b9978b9b01bf3c0fa97498916",
".git/objects/1f/fed540605a03c9ae9a75a17b2ccd17b3f57c58": "85bd891329373cba7d560cab84e9551d",
".git/objects/23/637bc3573701e2ad80a6f8be31b82926b4715f": "5f84f5c437bb2791fdc8411523eae8ff",
".git/objects/29/a6590dc6302fcd1aa452845dab622823cf3b9d": "b6641ad9e19a021e68a4eaf969d456a2",
".git/objects/2a/e4a95208e0ecc416c437613736b699c9d9fb19": "fe37c845741ec6d2e246a99174bb93c3",
".git/objects/2c/2cbc56047dd9f276d1820f353e15499a6ed5b1": "9b308bf3a6e07a028e92be3645ebbe60",
".git/objects/2f/d9f9570028dac87fd50b6dd37124d915c8b441": "b03153184e802e3dcc030a815492f5b1",
".git/objects/36/f5cda4bf0252806a13472162c151e6c1d57862": "3b26818952ae30ef9e44b7b37cb6e554",
".git/objects/37/0b1e3c5841fd492d67cd8d98549a94b8be5169": "a092506a53203499cc6190f87ed3457b",
".git/objects/40/d1d151bef6357da986e2c8080562173d12c2f5": "dc9509a0cf5e83fc16837e22d6f92c0c",
".git/objects/43/be86f158e99366f02bea126caded1441f355a9": "3b20e2c9e28f12ccc67b9176a9d70360",
".git/objects/43/ee7c07f4ba829d2bcd05f2e3d5d3b1e3782b15": "3338c846f9e3b500dffccda38d5b58a8",
".git/objects/44/0a20285315676ca56a8a239b27589756cc3538": "dea2cc98b36804f86ee6d87ef6938577",
".git/objects/44/7b1b235771e2e2e78dddda5c4c6b29d1eea55f": "5ac0adbaa315ba8600ba15133387e1cd",
".git/objects/49/bfe9c74bc2a46a55ec383f831dc459365d7816": "b7e5d10d8d56070256edb2adf1ebfbac",
".git/objects/4a/39079e580dc9be820cba2fae41238c49eaa798": "ada1a19fea32fbb6719120809b9eae60",
".git/objects/4b/6f440d1cee28fa9fcb9c5c9e214fe5ec1ae496": "cd2d92ac98e701c7f8112fd34570136e",
".git/objects/4c/b033202318dba37d60f1e6b58f0a7fa9c8a7a2": "1f16e770152c6f8d466480185e872707",
".git/objects/4e/4c82f29b453d0ef65da07f805e7a451e077b5f": "20e5193f46976fe282d3a5cae0c4cf60",
".git/objects/4e/ec9e7a0b762b2e2ec28b0c9424f592c114b590": "46b1897de3e6be775f0867b6828c70c2",
".git/objects/51/1458a90c3ff73f79918deda470e606362c6006": "73cdf31e43fd749f81e2ae5c2f12da14",
".git/objects/51/8845b7e545c961cc88c41a1bef4c3d13571f1f": "2c22e667a704c0af549fa5b9f7a89f80",
".git/objects/52/1d612d5e2146d2d8d51e5d1b0df25e063b2487": "63160caaa2d905998e1ee66deac9dd0d",
".git/objects/53/7807567919e88db2866b7825339c57e94c24d8": "970aec5149a3dbe9370a9dc982cdd022",
".git/objects/54/8afd33bf2f0f21f739cf0b4c5d912bedb4f32c": "1d13216cfbd275e8d13779d0959e78d0",
".git/objects/57/b0fa73c937eb3f5f2fdb3efefbf914ee7026e2": "1633da1561b63a50294c64c3f12b7e24",
".git/objects/57/bf920ac6218af1fabc3201748e06539ca4ce68": "81499ef3feb0d2409fac268a5c592591",
".git/objects/5d/cbf5e7ba1182c69f34c81a56604b6ea3cc762e": "2b25a198f12fa5173721cf5117ac2171",
".git/objects/5f/3dfb663497173dc56788efcfe8c6c7db757848": "69ea7889feee7bba29b9b972ce361f70",
".git/objects/5f/81a203ffc40ffcc33850883eff73a2605402c9": "f4d480b8695b888b45f0de1ad6a955cc",
".git/objects/62/256ec35d8b80082dcee63620bb7168c841bcb3": "1c57306b9af2b032d77e1cd076f885e9",
".git/objects/62/380833b11600567d23e98c158c73ad4f9d5cfa": "50db6f07361266b4209842512036d53f",
".git/objects/62/420070826eedaf66334d1cf369766d319143f8": "fdd7d86a3c85892ee52426115be56837",
".git/objects/62/bfa892313775be641d62b3b8b6302a5037b44d": "64299a20b2c1f7b790a1910102c67e24",
".git/objects/64/d6d27620164662839700f209bff521411b7e6b": "cdbbc04b5dd9179c13bf2408e7a0b9bf",
".git/objects/68/291e1c77c3bcc8640b5ea5983d7bebc6cf692b": "6638dc0544717aacbb74ec514aaf2278",
".git/objects/69/278d26132adc487a7a39e1823b99beba83abe3": "c627c4f7c7ad21ef5d046b5a1acd4a48",
".git/objects/6d/452b501f3a34530e3eddc87f7e6e4fcd3ff292": "2b363d54f159e6d197def90b156f59e6",
".git/objects/6f/2a59e966e3fef00af3294d765a40db04ddf69e": "7bd0a452b7c88a8ca4a8a02e79d33523",
".git/objects/6f/dbcd5af35b7bd18331527f578981cfc82826c2": "6203243cd653de30466f6a4a63a34ce4",
".git/objects/71/0ded7809f6f5e9b0740045776f844f26f6a488": "4eab81b307719ad83657bc296de76058",
".git/objects/72/0b1d787f931c3d34413ad04d62e40ed1a31ecb": "01226e8bbcd0168814002e95b5a821d1",
".git/objects/73/e23d0f5f8e1fdd7571814293b33f8aa430d5f0": "52d33b112949225ad0e98ccc836e85f7",
".git/objects/76/bff6546efa470b5f9bb4f744940ecf537af4d1": "100b0f28dc7c78212325926863d43e79",
".git/objects/7a/216c5e5f55493e78ff4f3f153a15acf448859c": "dc636663e97ed5f24216c0d7c256450a",
".git/objects/7b/4a59ba4ff73643160bee082ea10a0ac01ffba4": "12dfc16b2653b48005bdbee474861d48",
".git/objects/7b/53d4d2247b0bda00b3880e30b604f3ac47dbb7": "7327aecc3706f94ab45279f042170d7d",
".git/objects/7b/cf187bce04a8fa832000862ac2647657b17729": "84c9d0ae8eab3e5216883a6155f537cf",
".git/objects/81/85df3411368f1e55735ecff134819199525f03": "ded7a41ce3c7e198e69624367df6eeac",
".git/objects/88/75b4040365ba6428fe9e5b621a2cd8aae6c142": "9bd7aa5127c70a5ea1725de01e58f83f",
".git/objects/8a/818e3bd06d2da458b25b9601065dd4838d1880": "8bc1f0a0f6667bb6c06c02a1b85772b3",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8a/c7036f159f3877bea9e35a736ccd50f07ccbf0": "5f1939786e862798d3fac18f9ca6c4d8",
".git/objects/8b/79a8b308f98dc347129359597004df6df97f6b": "0f281425f67ffc52c1159676e338dc98",
".git/objects/8d/9bfa0e47349037b5773272b71f5c331a11bb41": "925b7c07bd074a2f54955e8720155267",
".git/objects/8d/9d49da914947c35cf97c49c6da20642ebbd25e": "d089c458b6d1955fa4aee29231dfe583",
".git/objects/8f/8ee6442fca3970d220fc386583b3dce06fb759": "2a4b832b0f385e2a01038eaa7fabceb3",
".git/objects/90/8951eb63a4d61b18625247a70c2cfa4c90ee7b": "9f047a7c68a00105af99c7c308e1824d",
".git/objects/91/0a15897452c9b27fcce73955fa67ce05ee9410": "1b6798124acf0dc67a5c67857c85fb9f",
".git/objects/95/e3f0b33c1d398189d6f816dd7c93143bac6c91": "2df13a67dab9cc7e7173f83c0f2ac64d",
".git/objects/99/87b7a8411d1cc187fcdd2d1a61da5e9662d437": "ba64991a1f9af252459845f8da5d69a1",
".git/objects/9e/317df226ea7c430b219d1b0730c1302f800451": "f31e6671b9479d1ea8267f8297da885a",
".git/objects/a1/305ccc1c3620add3b5436cf9775709ea4015ba": "ba7c3df8fd65b59bcb9de361cbab7097",
".git/objects/a4/f120bf03948fcb35fcf7b58140a708a8037475": "b96a90bde0d1807fc1e4a5c3cdb4b014",
".git/objects/a5/688d2f2fbaf8b2fa59659e59d16405d508bab7": "732d96c2c84d38dfed581c78e1696eab",
".git/objects/a6/8be5904a1eeea2e371a4d719482c4c588d8dd8": "cb8dc781c4d4499f85e48d93e3ad3aa3",
".git/objects/a8/64c5517c7e1568d5b605aeb97e88359126e6c9": "5bf7d028845a833ef93534bf4cf28be8",
".git/objects/ab/38463397b27b496e405502d65c5b0c8c0f636e": "be4135c89e8a72d808344c8aa916af68",
".git/objects/ac/3ff0d6e511d595f9383133234343e28eff34a1": "7117b603dd987185df93b339074d6877",
".git/objects/ac/f486f771f44b42d79003fc01b0b8a4ca010905": "69653e0b0f516b278c43bd86121593e7",
".git/objects/b4/ce38789569123895a3cdaf0d76f7b3392919c5": "fe57fe9012a7ed268875ad30754cbeab",
".git/objects/b4/fe68a176cf92f0849e8795c8d9991a2136db91": "15c6b4cbdd3bf879f9af3dcacf849b52",
".git/objects/b6/38668b2df99587514952ed8bb4efc770b333eb": "c49bebaa5ed09c7461f8b1eb5d7333c9",
".git/objects/b7/3b44f28eb28d279773529984a71fb3bc511997": "227e0dcc2f9f3ebb30389138f95ef71d",
".git/objects/b7/8ab3d40e0bc3c4e6f0150161a196a343d7da82": "8af0f1a8a30e3d20acdb5b08eec2efc3",
".git/objects/b9/133b54ca0a7cc4801c8a692df421f1a91503fd": "044f181c26336e1d262ba357f10808aa",
".git/objects/bf/455779769fc69e5299a95aacd302d7fdaf428b": "7c967d9123239691f9af5547b581af51",
".git/objects/c0/868c636dd6b7d9a52d02fc45309d30140fe92b": "6b887da9042df8b4ebf5fe8a5603c0f5",
".git/objects/c1/c165bbe1f33500547950152d3f1d7310cea3c3": "123521c3aa194fb11b582a0b4fdb9e46",
".git/objects/c4/88bc0f5afb436461748fdafd938d85f63a5289": "01cb8a1d3cbd6dc694b85e00c2748f12",
".git/objects/c5/541482230075d4b4800ebbb7ac42fad29e5133": "2dbef2c7d7d4a340f138a10876c31d29",
".git/objects/cf/6c8e0470e14da120102b37ce5b53fd768d7e9e": "12414cc7d2c6f634e048eaf237cae1e8",
".git/objects/d0/d025ad54628794fe71a642f38464975ad216ec": "6d7b01ebebecebd42f0deb6849d67eff",
".git/objects/d0/fb2caf99926567306d1d702c1222bb28c1fcc5": "5c677f7aaac4b03eb15f0f7ec9a2f060",
".git/objects/d1/6b3e192c29ccd8a1484438874d9b643cd894c2": "a6f88b99343d24cbb478fe651e8f8496",
".git/objects/d2/72143c38d2dfc22fc779d6a38620119493a1f7": "84e3f9eaf858d0d4ec4fdc5365bb7861",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d5/f99b6b2f754ef45d3e2d5b9c9ea38b161dfb26": "5966e70a49f52030ffd7b536339c0d6d",
".git/objects/d6/0f90eb3b84176f427ce6c620a520e74a25f317": "c689974b3d1dcfd6a069d9594f0d0dfb",
".git/objects/d7/2c11112c7cb4e2ce754bc41470f9b829a2d00a": "d7280a766a5d6033f187d874a92b5ad6",
".git/objects/d7/fb34e1d7359d12458729fafcf2abcc0d18452e": "312bb40e20681b57441ea9adf944190e",
".git/objects/d8/08b0f7c0e422f4ec766b8f68ed4fff9a40d3a9": "198174bfe7ef4249cae0e4e71b516b73",
".git/objects/d8/ae6f6955a5ebf587fe031f9c2fe5a45c3f5ea2": "150d44e0fbebeaa41f5afcf5948125a0",
".git/objects/d9/eea51b5a725ae2a35bc489cc91a047c0b3bd73": "77a0ca1e63937bd1dabc24e8abe601aa",
".git/objects/da/9bca864807d57077c0dd4c8dbb644bf1734922": "eca0a625063b7469f4981e401f08bff4",
".git/objects/da/c26acbe6fea6b51622bbc43189258b569b5665": "9dd40ebd3506155f1930a5bc549e2cd2",
".git/objects/dc/e9e230eaaee1a8cb2f60c7a9fe2b4c32dd3a2b": "b05963d2aea110a93204ce242a087418",
".git/objects/dd/275249b2eb41e5344ba90edb89d90c00642f4e": "f2b6364d0d2f99cea0d6d89a7e079ef0",
".git/objects/dd/2d35bb973a6f67eb1c41ba85545c9dac34c46d": "54045d1482c562601e3397bd68b98b21",
".git/objects/dd/db31e74e33cca555d465985c00340efecb47ca": "ae3e2d05c342b6d18ee5c0f066e9c313",
".git/objects/de/74e73f66c23378c08039a25528fc7d86aadf02": "c2e710953960f5ff90360793a951bee2",
".git/objects/df/0c169c137fc4e835ac2ad371c86796f27e2c36": "ea4a530561b11b783563d0af40c8e411",
".git/objects/df/2d75f9326caf961a1b668849d57c1b9b7e4e9a": "138ed16ceef21f13c5f80674c304c797",
".git/objects/df/43288671ae8945f58f4de579b559e0d24f2273": "95ce1d66806745000e69777033375a2c",
".git/objects/df/b6eac1e96cf2497c87573ba9cbfc02ac3b8d98": "54a743945f216cb28308a89dff9282c7",
".git/objects/e0/185b41782267157f5d365c55caef7adbc0ddc5": "bd2b82b359d805de5ce5ffa0de124878",
".git/objects/e4/5aec4765226ae99fb0a88d82d329454b0340b7": "b6045794789a5e02f45de17861745792",
".git/objects/e5/2888d4bdfea64b9cc4b2be2374355f230e387d": "1abfc380bc4ade63eb3f026f55aa4147",
".git/objects/e6/b745f90f2a4d1ee873fc396496c110db8ff0f3": "2933b2b2ca80c66b96cf80cd73d4cd16",
".git/objects/e7/8d03bc31a8f35c9db9e01124f93284a0d03a33": "2688e0bb0bc461444cdb272e2241b016",
".git/objects/e9/1148765e1a2e93d6b54693385d8ec4ee3bc9cb": "0c6d894f416e99916a9ce9aef0b10b0b",
".git/objects/e9/3e5db62a4ef63670784bac0bbffa01a70deb44": "1f361a9129c0200bd731cbeb87aaf052",
".git/objects/ea/85c920cae5afb76d237b5a0e7be12eeaa09de2": "7782fe5eecbe778f0c231596585aa0a8",
".git/objects/ec/e3de1e9cc73f998c41d136d42ed4eac7102e3d": "4813d7e19a4c5923d6c6bd79e7f3b3c9",
".git/objects/ee/6cdcd424a19721131567f75bd7d2d5272106d2": "1fbf4dcb5da3bc4284f03de3642fe4e8",
".git/objects/f1/01f92f6f3cc22b270e74df5050b69b3e934a7b": "e561f7d6a5c9ec52e2cd9ac4cfcd8715",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f2/2efd705678e71d26ac90f3024e35404d2459f6": "9f2b0c122a0ac5b59d835944eb12130b",
".git/objects/f3/276dda8691d15dc38476729da81da4bcdea9ae": "0c7aa24350c13dfee4dda54e50ad319a",
".git/objects/f3/d380f4d93b22b18cb4f51e141284b3a40d7159": "c47f163d56cc69807afda94dd4f15a63",
".git/objects/f4/102d5d46e9e0254a6945b721419f47f2ad3025": "77f936e3f2f62f062ecbe700328f711c",
".git/objects/f5/e82d110a7a406f0063dfda75f38c2e4c9cdd5d": "ceed6b246bc9b089c9c1df3f3a5d2e72",
".git/objects/f9/a4ce15c3df26290bdf97b599f2642a05ce4c59": "89bc7e0ba1a3bf86380ba675801a829a",
".git/objects/fa/5a57f313c19a615b8e194d1599094b2ff13ae8": "5c47edf97a31bc7b44f213d62a806f5d",
".git/objects/fa/ffb2aa30a7eb01ad66c9c90b42eba7a0f099bb": "4eaddbde04c929d4c36b315f58f6ff9c",
".git/objects/ff/d614e209efc0f759cbd9dead9b117979c3c19e": "ea6e492b26f7c2cf30c6df5d744388e9",
".git/ORIG_HEAD": "c873e57b94e51edd571d8c1312101fc8",
".git/refs/heads/main": "7a5c1aad6ec9d2d4de6abd1830148d0b",
".git/refs/remotes/origin/main": "7a5c1aad6ec9d2d4de6abd1830148d0b",
"app-ads.txt": "a853619b6b2937b7c24ced94230f9f34",
"assets/AssetManifest.bin": "6ba9681f400972ed8f22d711ac79e3ea",
"assets/AssetManifest.bin.json": "d5e746a899c28e00442956b51fca957e",
"assets/AssetManifest.json": "2c9f3d31dc5d4045db758072087a0fa1",
"assets/assets/android_apk_badge.png": "4e2c8eeda2efaa694b3283175ac9adfc",
"assets/assets/app_icon.png": "f451b959e0e14691d29f4d2d1e4f208d",
"assets/assets/app_icon_music.png": "0b952f8dfe6f233ef6526badc3662238",
"assets/assets/bitcoin.png": "8227f2b9f0fcef8b588cecd9b1bcae7a",
"assets/assets/cashapp.png": "42dec4b15db727eedbb9a12c3f5169e2",
"assets/assets/copyright_logo.png": "7d3bdd5f4dcfca2df850b0935a48c4f4",
"assets/assets/ethereum.png": "e37e8eae3fc42945b7fd904d18ac54f2",
"assets/assets/google_play_badge.png": "1a9453063dc4ab95fc0cd62b9c1a095e",
"assets/assets/hfa_logo.png": "075426d9b1898a9a7b9ed372a862453f",
"assets/assets/ios_app_store_badge.png": "362c61de9a60dcf6b1f2e9732c5d7205",
"assets/assets/isrc_logo.png": "9380ec6454483a7b255aee7cf3c8ee05",
"assets/assets/litecoin.png": "1752b6f6b63f71a75bd472dabad939d6",
"assets/assets/logo_medallion.png": "0ccdfc66f9452c5629c5dc78e83d7113",
"assets/assets/logo_medallion_orb.png": "6a6050590b39c4c649133dbf6c2bf813",
"assets/assets/logo_medallion_simple.png": "73b7f834e75535247dfc3294142d9b87",
"assets/assets/logo_medallion_with_eq.png": "d6e487471608aba5de84346cd4ecbae9",
"assets/assets/logo_orange_512.png": "106f399b391ff8578eceb65eeb25ecfa",
"assets/assets/logo_white_500.png": "835778cf4df1da37af6f676551f35a35",
"assets/assets/luminate_logo_dark.png": "2aa5747a17b9f7e617792bcda787e7d2",
"assets/assets/luminate_logo_light.png": "d97d5bc9e8a7efde9a000c1b4c5ccd7a",
"assets/assets/mediabase_logo.png": "ca0e38272fc77015aa4070d27db7ca64",
"assets/assets/mettacode_application_brand.png": "678f5b20ff1e34d9bc2e7127dd2463f3",
"assets/assets/music_book.png": "bd5221e41c272c972d090266905a013a",
"assets/assets/play_store_feature_graphic.png": "8bcb10e4ef7973a7550bf2312263b265",
"assets/assets/pro_logo.png": "591670d4d7fcba3b86d245f38d309dcb",
"assets/assets/scapegoats_text_logo.png": "7d8bbfdbffdd1d5d17b71892afa89c67",
"assets/assets/sg_lp_record.png": "5d418c9777ea1da288ac50fd8e6234fb",
"assets/assets/sg_origins_logo.png": "f722b4993b07d1acf3c9e8e4132d9d88",
"assets/assets/soundexchange_logo.png": "8eb73f9a1cb8afec51556dd478b48144",
"assets/assets/tos/tos_app.txt": "4bd68be7f72008e16b3e69b30e1a2d9d",
"assets/assets/tos/tos_copyright.txt": "fc8a7182ef0403a1ecbb756e754561b8",
"assets/assets/tos/tos_hfa.txt": "0dc5c57c45f45f37edd0d759ba11a18e",
"assets/assets/tos/tos_isrc.txt": "6485bca43103ac4d727d197102404fde",
"assets/assets/tos/tos_luminate.txt": "4d873d7c0108cc910300eedc9fb2d170",
"assets/assets/tos/tos_mediabase.txt": "c7664296d092e20eb00dfa2e89b4ad3a",
"assets/assets/tos/tos_payments.txt": "956c5ddbaaad73154fccda6f540ac44a",
"assets/assets/tos/tos_pro.txt": "4f37f4bd0ccf706ece3c2c7c64a5cb53",
"assets/assets/tos/tos_sx.txt": "d4908b1e39cc61772e5d74e5fb77d241",
"assets/assets/tos/tos_web.txt": "3b84b54d0e81ccc3b565d4313d19ee6b",
"assets/assets/twitter.png": "69d4bd7aea0945ba7ff5e77d1752a5d1",
"assets/assets/venmo.png": "bdfa9632d227044c5cbbfcdf8f640f03",
"assets/assets/windows_store_badge.png": "486a0de58c132ee4a9e4b43dc7368857",
"assets/FontManifest.json": "5a32d4310a6f5d9a6b651e75ba0d7372",
"assets/fonts/MaterialIcons-Regular.otf": "c7b015a366e7d9c418b03954f38663af",
"assets/lib/env/env.g.dart": "abd0af639491b9d1a0ad71de01971e26",
"assets/NOTICES": "e8bcb15cb645999136e4da3f14ce3801",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "a392a260f2bfc7d8a22861df44f6add1",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "f3307f62ddff94d2cd8b103daf8d1b0f",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "a1ce4516bff815ae3dccf2326c590332",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "c86fbd9e7b17accae76e5ad116583dc4",
"canvaskit/canvaskit.js.symbols": "38cba9233b92472a36ff011dc21c2c9f",
"canvaskit/canvaskit.wasm": "3d2a2d663e8c5111ac61a46367f751ac",
"canvaskit/chromium/canvaskit.js": "43787ac5098c648979c27c13c6f804c3",
"canvaskit/chromium/canvaskit.js.symbols": "4525682ef039faeb11f24f37436dca06",
"canvaskit/chromium/canvaskit.wasm": "f5934e694f12929ed56a671617acd254",
"canvaskit/skwasm.js": "445e9e400085faead4493be2224d95aa",
"canvaskit/skwasm.js.symbols": "741d50ffba71f89345996b0aa8426af8",
"canvaskit/skwasm.wasm": "e42815763c5d05bba43f9d0337fa7d84",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"CNAME": "9d408f02ed8674fe58ad1c962b935ede",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "c71a09214cb6f5f8996a531350400a9a",
"icons/android-icon-144x144.png": "e2eb233a8b5d354c19e31002b8126a5e",
"icons/android-icon-192x192.png": "2a07f1f2c473906936b9bb69572fa60f",
"icons/android-icon-36x36.png": "d0469ea2bc3e803788670b3613976bf4",
"icons/android-icon-48x48.png": "8e2bec4ce4a6a21338e3a909ded542ce",
"icons/android-icon-72x72.png": "ff32880201c348a75da95bcbfd2f9fcc",
"icons/android-icon-96x96.png": "665435d2f99824d1299ee5db3f150153",
"icons/apple-icon-114x114.png": "c8873a17c597a3aa4aa1f97ec25c3fcd",
"icons/apple-icon-120x120.png": "248e6b401ecb8b2c3e19569ce14d732d",
"icons/apple-icon-144x144.png": "e2eb233a8b5d354c19e31002b8126a5e",
"icons/apple-icon-152x152.png": "9f811ac192eb81e45df39015a8eb2d3c",
"icons/apple-icon-180x180.png": "88ca268fe8923fbd4f0d261f77db5c09",
"icons/apple-icon-57x57.png": "1366918ac805bf8e4c11114131f7d0c5",
"icons/apple-icon-60x60.png": "e93c8ca492d9e55a4f16842c5d5db2a0",
"icons/apple-icon-72x72.png": "ff32880201c348a75da95bcbfd2f9fcc",
"icons/apple-icon-76x76.png": "74f64125585a6b15c183d0301907151b",
"icons/apple-icon-precomposed.png": "d1fe08ba1151d48f006225885c4370b6",
"icons/apple-icon.png": "d1fe08ba1151d48f006225885c4370b6",
"icons/browserconfig.xml": "653d077300a12f09a69caeea7a8947f8",
"icons/favicon-16x16.png": "f39311e23a916864babe4749831f1ac8",
"icons/favicon-32x32.png": "585f76623ba32552ea020d0870d92dde",
"icons/favicon.ico": "3a9f00202ac5722e8f6e2fbf53a05d8a",
"icons/manifest.json": "b58fcfa7628c9205cb11a1b2c3e8f99a",
"icons/ms-icon-70x70.png": "b0c33084b4120063121852a6a9edfaf9",
"images/geareyewhite-72-500sq.png": "835778cf4df1da37af6f676551f35a35",
"index.html": "8ca8afe7f9f7d1fc7abf0952438882dd",
"/": "8ca8afe7f9f7d1fc7abf0952438882dd",
"main.dart.js": "926b0597a0151f777b2747741a06431b",
"manifest.json": "720d9e1fa510f5cd7c5a7b89be85d279",
"OneSignalSDKWorker.js": "ebb63ca15bba16b550232b0b0f66c726",
"robots.txt": "b8bfd6acacefecdcbc4e63c63f2ff814",
"splash/img/branding-1x.png": "095d39e195d7729023418b35fb4a1dcb",
"splash/img/branding-2x.png": "08ab939f2101d3af03687cbb87770150",
"splash/img/branding-3x.png": "e339e760524c2a7efe3251c1f3a6db52",
"splash/img/branding-4x.png": "db9231b604ab4b29af0d25f70e4ed864",
"splash/img/branding-dark-1x.png": "095d39e195d7729023418b35fb4a1dcb",
"splash/img/branding-dark-2x.png": "08ab939f2101d3af03687cbb87770150",
"splash/img/branding-dark-3x.png": "e339e760524c2a7efe3251c1f3a6db52",
"splash/img/branding-dark-4x.png": "db9231b604ab4b29af0d25f70e4ed864",
"splash/img/dark-1x.png": "136772325ab504e28af3efe680b3547e",
"splash/img/dark-2x.png": "83935c1b56887847080816c415466778",
"splash/img/dark-3x.png": "48ec8fd7111a211d97203505029d9085",
"splash/img/dark-4x.png": "ff6564304e11918272859537c522a246",
"splash/img/light-1x.png": "136772325ab504e28af3efe680b3547e",
"splash/img/light-2x.png": "83935c1b56887847080816c415466778",
"splash/img/light-3x.png": "48ec8fd7111a211d97203505029d9085",
"splash/img/light-4x.png": "ff6564304e11918272859537c522a246",
"styles.css": "9891ef353edf12299644d6ccf2b8d1dc",
"version.json": "a366f37a52176d4686fbb0d2f3161517"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
