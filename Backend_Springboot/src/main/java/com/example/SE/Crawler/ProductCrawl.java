package com.example.SE.Crawler;

import com.example.SE.models.Product;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.jsoup.Jsoup;
import org.jsoup.nodes.Document;
import org.jsoup.nodes.Element;
import org.jsoup.select.Elements;

import java.io.FileWriter;
import java.io.IOException;
import java.io.Writer;

public class ProductCrawl implements BaseCrawler {
    @Override
    public void CrawlData() {
        int dem = 0;
        String baseUrl = "https://woodfurniture.com/collections/all-outdoor?page=";
        String baseId = "Body_";
        try (Writer writer = new FileWriter(
                "D:\\SE Project\\springboot-backend\\src\\main\\java\\com\\example\\SE\\JsonFile\\Product.json")) {
            writer.write('[');
            for (int j = 1; j <= 3; ++j) {
                try {
                    String url = "";
                    String num = Integer.toString(j);
                    url = baseUrl + num;
                    String category = "Product";
                    Document doc = Jsoup.connect(url).get();
                    Elements elements = doc.select(
                            "#main > div.shopify-section > section > div.container container--flush > div.layout > div.layout__section > div.collection > div.card > div > #gf-grid > #gf-products");

                    for (Element element : elements) {
                        dem++;
                        String link = element.getElementsByTag("a").attr("abs:href");
                        /// System.out.println("link: " + link);
                        String productId = baseId + Integer.toString(dem);
                        System.out.println(productId);
                        Document docs = Jsoup.connect(link).get();
                        String image = docs.select(
                                "#main > div.shopify-section > section > div.container container--flush > div.product-block-list product-block-list--small > div.product-block-list__wrapper > div.product-block-list__item product-block-list__item--gallery > div.card > div.card__section card__section--tight > div.product-gallery product-gallery--with-thumbnails> div.product-gallery__carousel-wrapper custom_carousel_wrapper > div > div.flickity-viewport > div.flickity-slider > div.product-gallery__carousel-item is-selected > div > div > img")
                                .attr("srcset");
                        String name = docs.getElementsByClass("product-meta__title heading h1").first().text();
                        String cost = docs.getElementsByClass("price").text();
                        String description = "";
                        Elements desPTags = docs.select(
                                "#main > div.shopify-section > section > div.container container--flush > div.product-block-list product-block-list--small > div.product-block-list__wrapper > div.product-block-list__item product-block-list__item--description > div.card > div.card__section > div > p");
                        for (Element desPTag : desPTags) {
                            description += desPTag.getElementsByTag("span").text();
                        }
                        String how_to_use = "";

                        String brand = "";
                        String volume = "";
                        String ingredient = "";

                        Product product = new Product(productId, category, name, cost, description, how_to_use,
                                ingredient, brand, volume, image);
                        ObjectMapper mapper = new ObjectMapper();
                        /// System.out.println(mapper.writeValueAsString(product));
                        writer.write(mapper.writeValueAsString(product));
                        writer.write(",");
                        writer.write("\n");
                    }
                } catch (IOException err) {
                    err.printStackTrace();
                }
            }
            writer.write(']');
        } catch (IOException err) {
            err.printStackTrace();
        }
    }
}
