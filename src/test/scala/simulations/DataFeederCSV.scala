package simulations

import io.gatling.core.Predef._
import io.gatling.core.scenario.Simulation
import io.gatling.core.structure.ChainBuilder
import io.gatling.http.Predef._

class DataFeederCSV extends Simulation {

  //http config
  val httpConfig = http.baseUrl("https://gorest.co.in/")
    .header("Authorization", "4be9657f36530e35d7107f4f543386cefbd6180b32bcf7cf7ec02ff0d4fe21e2")
    .header("Accept", "application/json")
    .header("content-type", "application/json")

  val csvFeeder = csv("./src/test/resources/data/getUser.csv").circular

  def getAuser():ChainBuilder= {
    repeat(7) {
      feed(csvFeeder)
        .exec(http("Get single user request")
          .get("/public/v1/users/${userid}")
          .check(status.in(  200,304))
          .check(jsonPath("$.data.name").is("${name}"))
        )
    }
  }

  //scenario config
  val scn = scenario("CSV Feeder test")
    .exec(getAuser())

  //execute scenario
  setUp(scn.inject(atOnceUsers(1))).protocols(httpConfig)
}
