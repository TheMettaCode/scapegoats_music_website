'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "2fcf366c951c6599c9d06b044c602682",
".git/config": "38175effde935dcdc7f13d207fc64cb8",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "6a30b9d707c9e384705b3c0cd3e1d6ba",
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
".git/index": "8b8b3d1b6983aa7f46cbef53d834f546",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "a53a2e86e01432c01266351f6ff7b0cd",
".git/logs/refs/heads/main": "e6527a250703fa3b92f7c80ef3b4a6a8",
".git/logs/refs/remotes/origin/HEAD": "35a6d374761c06a80b7467801d462e82",
".git/logs/refs/remotes/origin/main": "0ef508b4d885a0fe85cead0f99701576",
".git/objects/01/3d4a6a53334fae827a32824eaf51a889396514": "1035270d429ce7cb68c5f0febf0fc0f9",
".git/objects/06/d55d88ea29ac40c1f98188ab210672c1258529": "04ef745855725ebb05d0a69480063ef2",
".git/objects/07/356d02274e153629013dbf5b38d4f63c7f34b5": "f64d606ed941f35d968c4332fbec70dc",
".git/objects/10/ca0d50423753763b5005bd1c19bea82e6a40b5": "fa17b48b15e42e68b937d631169ec009",
".git/objects/11/3e70099bab7a06ba1683600b116d1e88bc2d04": "dd8cbe14ea1b42c89c84f1fde68872da",
".git/objects/12/272024b10ab21c1332060814f168658611268c": "d07dcf098428e075142226896999163a",
".git/objects/12/5c284dc2bbed823ed6389e50cc75a8a1ef2351": "9ab0bcea773dc4fd6ef989aef459b28a",
".git/objects/16/b56e7261834e3c5a3b1cb9697d9a3b3a254b40": "30bf6a28b7f777c9e9116a310296b3ab",
".git/objects/1b/bb993f30be4b1eb867f62d3f743d74350329a2": "0913b420fe5fa416104fc0dc8a093551",
".git/objects/1d/65c054983a016c2e2f9bcc41c1fb6b7ed01900": "31a51f92bb83adf4b5e6e262de19fbcf",
".git/objects/23/637bc3573701e2ad80a6f8be31b82926b4715f": "5f84f5c437bb2791fdc8411523eae8ff",
".git/objects/2a/4ae7a438fd2f7edf5480a231855ee948563dbe": "0dd032e4e9c07674aefc1aa5c8ca7e53",
".git/objects/2a/ee415236ec43e33e7de9e5ab902b061870044a": "ef740ade95abe01983817b2e88f35d50",
".git/objects/2c/2cbc56047dd9f276d1820f353e15499a6ed5b1": "9b308bf3a6e07a028e92be3645ebbe60",
".git/objects/32/04b90a6fcb1e11ceaf2db6a143b0739eae4343": "df0f7c33c0d08b3d26d137c8f47a3ac0",
".git/objects/37/0b1e3c5841fd492d67cd8d98549a94b8be5169": "a092506a53203499cc6190f87ed3457b",
".git/objects/37/7ead7488ba04497de54363ee4e4436edf85774": "d08a584d3f7b4fb2a65c159d695456ff",
".git/objects/3b/0cb02e0bfc2620dee37a3dab9d1e0eaf514077": "bc00e4d44732769ff443cee22c0a8382",
".git/objects/3b/6ed11f30a1b110c3196b960bcfcb084fb9f34e": "95bcdc396c263db334341f38066280e6",
".git/objects/41/03f09544bcaa8a2b0dd053d2abfb55ccafea3b": "816aace708e007f194b404e1efabacd5",
".git/objects/41/5c059c8094b888b0159fdedfd4e3cb08a8028e": "86914685ccd40e82a7fe5b70459fb9f7",
".git/objects/44/0a20285315676ca56a8a239b27589756cc3538": "dea2cc98b36804f86ee6d87ef6938577",
".git/objects/44/7b1b235771e2e2e78dddda5c4c6b29d1eea55f": "5ac0adbaa315ba8600ba15133387e1cd",
".git/objects/49/938d3f0c07beb7194c72b623c46ebc2acc28a1": "c52513b902ead034bc9a32ad0ecef9b8",
".git/objects/49/bfe9c74bc2a46a55ec383f831dc459365d7816": "b7e5d10d8d56070256edb2adf1ebfbac",
".git/objects/4b/ce11f832f26ee264d95b6790237601cf5a6088": "d9243641979aa81a886b057ab392745a",
".git/objects/4c/b033202318dba37d60f1e6b58f0a7fa9c8a7a2": "1f16e770152c6f8d466480185e872707",
".git/objects/51/1458a90c3ff73f79918deda470e606362c6006": "73cdf31e43fd749f81e2ae5c2f12da14",
".git/objects/51/8845b7e545c961cc88c41a1bef4c3d13571f1f": "2c22e667a704c0af549fa5b9f7a89f80",
".git/objects/52/1d612d5e2146d2d8d51e5d1b0df25e063b2487": "63160caaa2d905998e1ee66deac9dd0d",
".git/objects/55/919b0b32f21410d9755ffbe64aeb2d07650744": "ffb88073b04c5f9454f1e7f08edc733c",
".git/objects/57/02f88e6576ce89e4c35b0c1484525c3b1fdc7c": "b379122725eb59860f485a056f1bf2af",
".git/objects/57/b0fa73c937eb3f5f2fdb3efefbf914ee7026e2": "1633da1561b63a50294c64c3f12b7e24",
".git/objects/57/bf920ac6218af1fabc3201748e06539ca4ce68": "81499ef3feb0d2409fac268a5c592591",
".git/objects/5a/bd47718e27607eb905e8c1f5deafdbfd600db8": "ddb9fc195e72a9cd833711eb1b775fba",
".git/objects/5c/b4103c2a2cc4534190261f7f3de0c65d01c174": "d2705439964d3438c9d411087ee07125",
".git/objects/5f/81a203ffc40ffcc33850883eff73a2605402c9": "f4d480b8695b888b45f0de1ad6a955cc",
".git/objects/62/256ec35d8b80082dcee63620bb7168c841bcb3": "1c57306b9af2b032d77e1cd076f885e9",
".git/objects/62/380833b11600567d23e98c158c73ad4f9d5cfa": "50db6f07361266b4209842512036d53f",
".git/objects/62/420070826eedaf66334d1cf369766d319143f8": "fdd7d86a3c85892ee52426115be56837",
".git/objects/68/291e1c77c3bcc8640b5ea5983d7bebc6cf692b": "6638dc0544717aacbb74ec514aaf2278",
".git/objects/6a/562868741911ffc3a5345f3c094a71eb0d073d": "ad3237b80e6dc65be0e2000c6c0a445f",
".git/objects/6d/452b501f3a34530e3eddc87f7e6e4fcd3ff292": "2b363d54f159e6d197def90b156f59e6",
".git/objects/6f/dbcd5af35b7bd18331527f578981cfc82826c2": "6203243cd653de30466f6a4a63a34ce4",
".git/objects/73/a5ca9e6ea457a8e87e3e88047b9268f15bb75b": "437e873491b95548ba60fecc00fa7933",
".git/objects/76/bff6546efa470b5f9bb4f744940ecf537af4d1": "100b0f28dc7c78212325926863d43e79",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/7a/216c5e5f55493e78ff4f3f153a15acf448859c": "dc636663e97ed5f24216c0d7c256450a",
".git/objects/7b/4a59ba4ff73643160bee082ea10a0ac01ffba4": "12dfc16b2653b48005bdbee474861d48",
".git/objects/7b/cf187bce04a8fa832000862ac2647657b17729": "84c9d0ae8eab3e5216883a6155f537cf",
".git/objects/7c/7df7fa805220c9165353c6cfa89400a17de88b": "cf4feb7a7a4698b22c56a7628b5d64be",
".git/objects/7c/fd7699a95e34410a28fe61e8c25f4170d375e0": "232a64d0863ed366f0b4c25030663dcd",
".git/objects/87/a91afad977eca111d2fd86c1817e9af0b494d3": "5ccdca2dbfdf5abb490bed4a11a7d362",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8a/c7036f159f3877bea9e35a736ccd50f07ccbf0": "5f1939786e862798d3fac18f9ca6c4d8",
".git/objects/8b/79a8b308f98dc347129359597004df6df97f6b": "0f281425f67ffc52c1159676e338dc98",
".git/objects/8c/99266130a89547b4344f47e08aacad473b14e0": "41375232ceba14f47b99f9d83708cb79",
".git/objects/8f/8ee6442fca3970d220fc386583b3dce06fb759": "2a4b832b0f385e2a01038eaa7fabceb3",
".git/objects/90/8951eb63a4d61b18625247a70c2cfa4c90ee7b": "9f047a7c68a00105af99c7c308e1824d",
".git/objects/91/0a15897452c9b27fcce73955fa67ce05ee9410": "1b6798124acf0dc67a5c67857c85fb9f",
".git/objects/91/1775ec21f34f407a02949c201d0e82e947e247": "d0e924203077946058068b82a16c5401",
".git/objects/94/135a209a82ee537eab4cc4f6c62d4879ae3a41": "d681b293d7cf8cf501d6d63511ee3503",
".git/objects/9e/317df226ea7c430b219d1b0730c1302f800451": "f31e6671b9479d1ea8267f8297da885a",
".git/objects/a1/305ccc1c3620add3b5436cf9775709ea4015ba": "ba7c3df8fd65b59bcb9de361cbab7097",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/a4/f120bf03948fcb35fcf7b58140a708a8037475": "b96a90bde0d1807fc1e4a5c3cdb4b014",
".git/objects/a5/688d2f2fbaf8b2fa59659e59d16405d508bab7": "732d96c2c84d38dfed581c78e1696eab",
".git/objects/a8/64c5517c7e1568d5b605aeb97e88359126e6c9": "5bf7d028845a833ef93534bf4cf28be8",
".git/objects/af/c4edc4b5c3aedce6ed94a69a1b021128b81312": "e545c0522cf1e5d1211479a5ae033144",
".git/objects/b3/6b6894e7644da714872f2f568eb596109a23d2": "aeac82d963005593f79f00670eb34714",
".git/objects/b4/fe68a176cf92f0849e8795c8d9991a2136db91": "15c6b4cbdd3bf879f9af3dcacf849b52",
".git/objects/b7/3b44f28eb28d279773529984a71fb3bc511997": "227e0dcc2f9f3ebb30389138f95ef71d",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b7/8ab3d40e0bc3c4e6f0150161a196a343d7da82": "8af0f1a8a30e3d20acdb5b08eec2efc3",
".git/objects/b9/133b54ca0a7cc4801c8a692df421f1a91503fd": "044f181c26336e1d262ba357f10808aa",
".git/objects/be/35fca5b0ff15ced3673551b9b075423881c1ce": "2c120dcd4b95c900b0df756dcabd99f3",
".git/objects/bf/455779769fc69e5299a95aacd302d7fdaf428b": "7c967d9123239691f9af5547b581af51",
".git/objects/c1/c165bbe1f33500547950152d3f1d7310cea3c3": "123521c3aa194fb11b582a0b4fdb9e46",
".git/objects/c2/f54ef0cc215d1cde3178718d6fc17c1fe99e77": "d8647e9854798af72c8f8a7a5d67acbd",
".git/objects/c4/88bc0f5afb436461748fdafd938d85f63a5289": "01cb8a1d3cbd6dc694b85e00c2748f12",
".git/objects/c5/23471969a61829bcad3fb2e772305c384a2f33": "42866fefb4d9fb0db5cae3c702f49a47",
".git/objects/c5/541482230075d4b4800ebbb7ac42fad29e5133": "2dbef2c7d7d4a340f138a10876c31d29",
".git/objects/cf/6c8e0470e14da120102b37ce5b53fd768d7e9e": "12414cc7d2c6f634e048eaf237cae1e8",
".git/objects/cf/cfc361c510e5df3ed2a26e62fac21d608918da": "32e0e7c4bd58ef4f316e6aba36628689",
".git/objects/d0/76fcdb94663d1bfb37d6ed5550107d21247c2d": "3ce2c3e5fadc631499ebabd36f24b525",
".git/objects/d0/fb2caf99926567306d1d702c1222bb28c1fcc5": "5c677f7aaac4b03eb15f0f7ec9a2f060",
".git/objects/d1/6b3e192c29ccd8a1484438874d9b643cd894c2": "a6f88b99343d24cbb478fe651e8f8496",
".git/objects/d5/f99b6b2f754ef45d3e2d5b9c9ea38b161dfb26": "5966e70a49f52030ffd7b536339c0d6d",
".git/objects/d6/0f90eb3b84176f427ce6c620a520e74a25f317": "c689974b3d1dcfd6a069d9594f0d0dfb",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d8/08b0f7c0e422f4ec766b8f68ed4fff9a40d3a9": "198174bfe7ef4249cae0e4e71b516b73",
".git/objects/d9/1126d5834613da32f6dd91a681525c97055be9": "e26dbb66f2b2d4276dc318bf164524d9",
".git/objects/da/57ab2be3c7eb751ea24dcf790b38e8f1ccf6a5": "608e94501d0aa12e43b56b294358b19f",
".git/objects/da/c26acbe6fea6b51622bbc43189258b569b5665": "9dd40ebd3506155f1930a5bc549e2cd2",
".git/objects/dc/e9e230eaaee1a8cb2f60c7a9fe2b4c32dd3a2b": "b05963d2aea110a93204ce242a087418",
".git/objects/dd/275249b2eb41e5344ba90edb89d90c00642f4e": "f2b6364d0d2f99cea0d6d89a7e079ef0",
".git/objects/dd/db31e74e33cca555d465985c00340efecb47ca": "ae3e2d05c342b6d18ee5c0f066e9c313",
".git/objects/de/74e73f66c23378c08039a25528fc7d86aadf02": "c2e710953960f5ff90360793a951bee2",
".git/objects/df/0c169c137fc4e835ac2ad371c86796f27e2c36": "ea4a530561b11b783563d0af40c8e411",
".git/objects/df/0ee2dbce52bbed01b56fff0ef4f048a7c71b6f": "6b7813243b19b9f3cb7753361b0da27a",
".git/objects/df/b6eac1e96cf2497c87573ba9cbfc02ac3b8d98": "54a743945f216cb28308a89dff9282c7",
".git/objects/e3/3c417969fe2351a03948b9f2ca2b677cb183e1": "864e0390c63516cd88787b2ad724e7e5",
".git/objects/e4/33c3704ef79e504f178887793a979f89ae8bab": "8b5a41e2a485c5b82745bac21d9c09da",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/e6/9de29bb2d1d6434b8b29ae775ad8c2e48c5391": "c70c34cbeefd40e7c0149b7a0c2c64c2",
".git/objects/e9/1148765e1a2e93d6b54693385d8ec4ee3bc9cb": "0c6d894f416e99916a9ce9aef0b10b0b",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/f3/276dda8691d15dc38476729da81da4bcdea9ae": "0c7aa24350c13dfee4dda54e50ad319a",
".git/objects/f3/d380f4d93b22b18cb4f51e141284b3a40d7159": "c47f163d56cc69807afda94dd4f15a63",
".git/objects/f5/e82d110a7a406f0063dfda75f38c2e4c9cdd5d": "ceed6b246bc9b089c9c1df3f3a5d2e72",
".git/objects/f9/a4ce15c3df26290bdf97b599f2642a05ce4c59": "89bc7e0ba1a3bf86380ba675801a829a",
".git/objects/fa/5a57f313c19a615b8e194d1599094b2ff13ae8": "5c47edf97a31bc7b44f213d62a806f5d",
".git/objects/fc/c8b574a47ff707fa58b88e39d6ce42fbf89fa2": "594c63b834ab0f707da9803ac6c28562",
".git/objects/ff/18201d08c0ae036a1b8758193823a8ea1f7829": "ab52fc49be8a646c8771d46353b983db",
".git/objects/ff/887d2461ef44e061b39a1390079358ee9dbd68": "35a600520c0a95ddb46174d941e488c5",
".git/objects/ff/d614e209efc0f759cbd9dead9b117979c3c19e": "ea6e492b26f7c2cf30c6df5d744388e9",
".git/refs/heads/main": "13a4f1e40a1dda7168f802eee12e4931",
".git/refs/remotes/origin/HEAD": "98b16e0b650190870f1b40bc8f4aec4e",
".git/refs/remotes/origin/main": "13a4f1e40a1dda7168f802eee12e4931",
"app-ads.txt": "a853619b6b2937b7c24ced94230f9f34",
"assets/AssetManifest.json": "f1bd2ad6bc780a29d936cb0ee60bfa72",
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
"assets/assets/tos/tos_sx.txt": "d41d8cd98f00b204e9800998ecf8427e",
"assets/assets/tos/tos_web.txt": "3b84b54d0e81ccc3b565d4313d19ee6b",
"assets/assets/twitter.png": "401933ef36430ac6d3fdf0e100d5dd71",
"assets/assets/venmo.png": "bdfa9632d227044c5cbbfcdf8f640f03",
"assets/assets/windows_store_badge.png": "486a0de58c132ee4a9e4b43dc7368857",
"assets/FontManifest.json": "5a32d4310a6f5d9a6b651e75ba0d7372",
"assets/fonts/MaterialIcons-Regular.otf": "e7069dfd19b331be16bed984668fe080",
"assets/NOTICES": "e25263bd54191c56391ff9721c6ca584",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "b00363533ebe0bfdb95f3694d7647f6d",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "0a94bab8e306520dc6ae14c2573972ad",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "9cda082bd7cc5642096b56fa8db15b45",
"canvaskit/canvaskit.js": "97937cb4c2c2073c968525a3e08c86a3",
"canvaskit/canvaskit.wasm": "3de12d898ec208a5f31362cc00f09b9e",
"canvaskit/profiling/canvaskit.js": "c21852696bc1cc82e8894d851c01921a",
"canvaskit/profiling/canvaskit.wasm": "371bc4e204443b0d5e774d64a046eb99",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "1cfe996e845b3a8a33f57607e8b09ee4",
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
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/manifest.json": "b58fcfa7628c9205cb11a1b2c3e8f99a",
"icons/ms-icon-70x70.png": "b0c33084b4120063121852a6a9edfaf9",
"images/geareyewhite-72-500sq.png": "835778cf4df1da37af6f676551f35a35",
"index.html": "392c8e53fe70f84d8ddcf7eb3940521c",
"/": "392c8e53fe70f84d8ddcf7eb3940521c",
"main.dart.js": "c938d2c149d64affa3e53ded301d61fc",
"manifest.json": "3e8c68f8abcfcb6313782a9d92405bf3",
"robots.txt": "b8bfd6acacefecdcbc4e63c63f2ff814",
"splash/img/branding-1x.png": "82e1c8d503aea1bcc402598ddde539e3",
"splash/img/branding-2x.png": "38e6a29fee3f18a42c360f36d6c3c055",
"splash/img/branding-3x.png": "defe43e3262aab6d352c70bab4fc18d4",
"splash/img/branding-4x.png": "db9231b604ab4b29af0d25f70e4ed864",
"splash/img/branding-dark-1x.png": "82e1c8d503aea1bcc402598ddde539e3",
"splash/img/branding-dark-2x.png": "38e6a29fee3f18a42c360f36d6c3c055",
"splash/img/branding-dark-3x.png": "defe43e3262aab6d352c70bab4fc18d4",
"splash/img/branding-dark-4x.png": "db9231b604ab4b29af0d25f70e4ed864",
"splash/img/dark-1x.png": "058f8020ae39e856a22487cee170108b",
"splash/img/dark-2x.png": "37432c5df62bee11d5cacd0171b55b66",
"splash/img/dark-3x.png": "7e4b0ce3c42f02f895ecd22ba0ec1aa6",
"splash/img/dark-4x.png": "ff6564304e11918272859537c522a246",
"splash/img/light-1x.png": "058f8020ae39e856a22487cee170108b",
"splash/img/light-2x.png": "37432c5df62bee11d5cacd0171b55b66",
"splash/img/light-3x.png": "7e4b0ce3c42f02f895ecd22ba0ec1aa6",
"splash/img/light-4x.png": "ff6564304e11918272859537c522a246",
"splash/splash.js": "123c400b58bea74c1305ca3ac966748d",
"splash/style.css": "962873915b7f18af608bfa3f86550405",
"styles.css": "9891ef353edf12299644d6ccf2b8d1dc",
"version.json": "fbe692f67e96a55600fc7d9e4e15fac5"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
"assets/AssetManifest.json",
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
