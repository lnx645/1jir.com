"use client";
export const dynamic = "force-dynamic";

import { ActionMenu } from "@/components/ui/ActionMenu/ActionMenu";
import Dialog from "@/components/ui/dialog";
import { useDialog } from "@/components/ui/dialog-modal/useDialog";
import Layout from "@/components/ui/layout";
import { increment, selectCount } from "@/features";
import { useAppDispatch, useAppSelector, useAppStore } from "@/hooks/store";
import { cn } from "@/libs";
import { onec } from "@/libs/onejir";
import { dialog } from "motion/react-client";
import React, { useEffect } from "react";

export default function Home() {
  const store = useAppSelector(selectCount);
  const dispatch = useAppDispatch();
  const [showDialog, RenderDialog] = useDialog();

  function dialog2() {
    showDialog({
      title: "WKWKW",
      id: "modalapp",
      text: "Apaah anda yuakin ingin mehapus data ini?",
      acceptTrigger() {
        login();
      },
    });
  }

  function dialog3() {
    onec.notification.dialog([
      { text: "Set2tin234324gs", onClick: () => alert("Clicked: Settings") },
      { text: "H23el234324p", onClick: () => alert("Clicked: Help") },
      { text: "Log3243243242out", onClick: () => alert("Clicked: Logout") },
    ]);
  }

  function login() {
    onec.notification.dialogv2.show({
      content: [
        <Dialog.Item
          onClick={() => {
            onec.notification.dialogv2.show({
              contentLoading: true,
              onAccept() {
                alert("WKWKKW");
              },
              title: "Konfirmasi Sebelum data dihapus",
              content: `Apakah anda yakin ingin melaporkan penguna @dadanhidayat?`,
            });
          }}
          isDanger
        >
          Delete
        </Dialog.Item>,
        <Dialog.Item>Reposts</Dialog.Item>,
        <Dialog.Item>Report</Dialog.Item>,
        <Dialog.Item>Hide This Post</Dialog.Item>,
      ],
    });
  }

  return (
    <Layout>
      <Layout.Main>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolores illum
        rem asperiores! Quod nesciunt, magni corrupti ducimus officiis
        exercitationem dolore ipsum ullam sunt ut quos aspernatur officia vel
        recusandae esse. Iure eligendi corrupti debitis, fugiat magni nesciunt
        fuga quis impedit reprehenderit inventore pariatur facere nisi mollitia
        repellendus! Dolor, cumque iure architecto qui veniam ipsum laborum,
        eveniet assumenda enim, aut sed. Expedita, quis ea! Fugit id cupiditate
        adipisci dolorem. Vel quia ducimus, consequuntur incidunt ipsum eligendi
        facere illum laudantium voluptas, vitae aliquam maiores dolor officiis!
        Fugit facere ut quaerat voluptatibus voluptatem!
        <button onClick={login}>Login</button>
        <button onClick={dialog2}>Login</button>
        <div className="space-y-4">
          <ActionMenu>
            <ActionMenu.Trigger>WKWKWK</ActionMenu.Trigger>
            <ActionMenu.Body>
              <ActionMenu>
                <ActionMenu.Trigger>WKWKWKs</ActionMenu.Trigger>
                <ActionMenu.Body>
                  <div className="p-3">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Eos, at velit aliquid quis quos autem! Asperiores voluptatem
                    hic, praesentium at autem molestiae earum reiciendis
                    repudiandae iure dolorem quos cum similique. Recusandae quos
                    corporis nostrum soluta repellendus culpa dicta cupiditate
                    esse distinctio atque quae ad iure mollitia quisquam enim
                    nobis illum, voluptate autem molestias voluptatibus
                    perferendis! Voluptatum, ratione? Impedit, quisquam sit.
                    Nemo, iste earum assumenda necessitatibus suscipit quidem
                    modi temporibus libero est eligendi? Mollitia vel officiis
                    magni id fugiat voluptatum repellat repudiandae, saepe
                    nesciunt sapiente aperiam quaerat qui laboriosam ratione
                    enim.
                  </div>
                </ActionMenu.Body>
              </ActionMenu>
              <div className="p-3">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos, at
                velit aliquid quis quos autem! Asperiores voluptatem hic,
                praesentium at autem molestiae earum reiciendis repudiandae iure
                dolorem quos cum similique. Recusandae quos corporis nostrum
                soluta repellendus culpa dicta cupiditate esse distinctio atque
                quae ad iure mollitia quisquam enim nobis illum, voluptate autem
                molestias voluptatibus perferendis! Voluptatum, ratione?
                Impedit, quisquam sit. Nemo, iste earum assumenda necessitatibus
                suscipit quidem modi temporibus libero est eligendi? Mollitia
                vel officiis magni id fugiat voluptatum repellat repudiandae,
                saepe nesciunt sapiente aperiam quaerat qui laboriosam ratione
                enim.
              </div>
            </ActionMenu.Body>
          </ActionMenu>
          <ActionMenu>
            <ActionMenu.Trigger>Silahkan</ActionMenu.Trigger>
            <ActionMenu.Body>
              <div className="p-3">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos, at
                velit aliquid quis quos autem! Asperiores voluptatem hic,
                praesentium at autem molestiae earum reiciendis repudiandae iure
                dolorem quos cum similique. Recusandae quos corporis nostrum
                soluta repellendus culpa dicta cupiditate esse distinctio atque
                quae ad iure mollitia quisquam enim nobis illum, voluptate autem
                molestias voluptatibus perferendis! Voluptatum, ratione?
                Impedit, quisquam sit. Nemo, iste earum assumenda necessitatibus
                suscipit quidem modi temporibus libero est eligendi? Mollitia
                vel officiis magni id fugiat voluptatum repellat repudiandae,
                saepe nesciunt sapiente aperiam quaerat qui laboriosam ratione
                enim.
              </div>
            </ActionMenu.Body>
          </ActionMenu>
        </div>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Placeat
        reprehenderit eligendi, veritatis hic alias illo eum exercitationem
        beatae! Nulla illo quas autem amet quibusdam commodi ratione eveniet,
        voluptatum qui neque? Quo enim minima suscipit magnam laborum non error
        incidunt impedit, ratione natus quas ex possimus in maiores repudiandae
        quidem rem nemo! Perspiciatis distinctio blanditiis itaque natus qui,
        repellat esse odio? Ducimus deleniti quasi, alias, praesentium omnis
        doloremque eveniet voluptatibus illum, repellendus consectetur expedita
        voluptatum itaque laboriosam quia beatae distinctio. Nihil voluptas
        cumque fugit omnis velit at dolor commodi nostrum eius. Adipisci, nisi?
        Quas amet iure est deleniti quaerat et at aliquid voluptatem
        perspiciatis repudiandae, eius cupiditate maxime perferendis! Ratione
        explicabo repudiandae maxime a, enim beatae facere accusantium quae at
        ad. Totam earum nulla impedit labore minima deserunt? Harum vel esse
        suscipit cupiditate, mollitia iure reprehenderit aut quaerat sed
        molestias aliquam ab repudiandae? Placeat dolorem voluptates neque saepe
        in ab dolorum? Ex, exercitationem, fuga esse quasi vero alias
        consectetur velit sint asperiores id mollitia ullam architecto
        perferendis quidem, perspiciatis laboriosam dolores earum quam maxime
        enim libero nam expedita. Quos, officiis voluptatibus. Nam modi saepe
        rem ipsam tempora rerum pariatur eligendi! Iusto consequuntur ullam
        inventore doloribus numquam totam, dicta vel voluptate odit delectus
        mollitia temporibus, recusandae deleniti aperiam alias quo, sed neque!
        Repudiandae laboriosam iusto aliquam, reiciendis pariatur dolore ullam a
        provident consequatur libero at labore repellendus ad perspiciatis amet,
        eveniet dolor magni, optio ex. Culpa odit laboriosam facere nihil, ullam
        cupiditate. Autem reprehenderit error necessitatibus saepe nesciunt
        sapiente nobis nam, excepturi aspernatur, iusto harum eum consectetur
        culpa delectus quibusdam atque minus dolorum voluptatibus ipsam dolor
        numquam. Minus assumenda nobis cupiditate a. Nostrum, porro cum! Error
        accusamus nulla, qui odit id porro quod ipsum aut. Repellendus sapiente
        et ratione? Facere, quis debitis molestiae unde aliquid rem rerum,
        adipisci nam reiciendis similique aliquam? Praesentium maxime quis,
        voluptatibus est sed accusamus eveniet aperiam nulla ipsam dolor
        inventore tenetur hic modi, iste exercitationem magnam porro impedit
        dolorem excepturi amet illum eaque libero quisquam! Deleniti, nam!
        Distinctio cum dolor alias itaque! Tenetur rerum nihil dicta quia non
        architecto quas, aliquid consequatur maxime ipsa itaque ea illo, autem
        modi! Ad itaque voluptas aperiam quasi obcaecati voluptate maiores.
        Atque pariatur assumenda voluptas laudantium est culpa quisquam numquam
        modi quod rem dolores expedita consequatur, ut neque minus inventore
        accusamus odio! Ad blanditiis natus odio laudantium officia tempore,
        atque veniam. Laboriosam aliquam, qui asperiores earum laudantium
        voluptates excepturi accusantium voluptatem nobis ea! Qui sit recusandae
        quia fuga reiciendis libero perferendis illo nesciunt voluptatem
        blanditiis velit repellat, explicabo rerum distinctio ab. Deserunt,
        ratione voluptatibus quam magnam cum voluptas, tenetur praesentium
        aliquid placeat nam amet nostrum cupiditate necessitatibus numquam quo
        nulla officia, aut qui velit veritatis aliquam alias explicabo nihil.
        Vero, a. Iste, sit libero iure corrupti natus quam error voluptatum ea
        nam distinctio esse similique aliquid, modi deserunt sed qui ipsam
        accusantium repudiandae explicabo rerum eos quisquam adipisci deleniti!
        Numquam, omnis? Quod reiciendis, ab voluptatum vitae amet, cumque quae
        ea fugiat, eos magnam fuga qui et quasi eum ex? Ad mollitia temporibus
        nesciunt, eaque dolorum dignissimos facere quod beatae. Consectetur,
        deleniti. Minus magni perferendis quidem in dignissimos temporibus
        commodi consectetur aliquid suscipit rem odit enim quam ea saepe, alias
        quaerat voluptates repellendus! Sed, in. Provident accusantium ipsa
        tempora maxime molestias voluptatum. Illo laborum quidem, mollitia quo
        tempore quos. Eaque quis voluptatibus quasi, odio id omnis laborum et
        vitae, quas voluptatum delectus earum, facere velit sed ad minus
        recusandae ipsa exercitationem vero. Quidem sed cum illo assumenda
        laboriosam, dolores ducimus accusantium molestiae ratione? Aut
        perferendis nisi dolor ipsa tempora nostrum optio ea eum, minus fuga
        odit dicta illo neque accusantium. Nemo, fugiat.
      </Layout.Main>
    </Layout>
  );
}
